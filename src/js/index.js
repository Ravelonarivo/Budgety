import Item from './models/Item';

import { elements } from './views/base';

import * as itemView from './views/itemView';

/**
 * Global state of the app
 * - Item object
 */
const state = {
    items: {
        inc: [],
        exp: []
    }
};

window.state = state;

/**
 * Item Controller
 */
const controlItem = (event) => {

    if (elements.inputDescription.value && elements.inputValue.value) {

        // Create item
        const item = new Item(elements.inputType.value, elements.inputDescription.value, elements.inputValue.value);  
        
        // Add item to state
        state.items[item.type].push(item);

        // Add item to dom
        itemView.addListItem(item);

        // Calculate and update percentage
        if (state.items.exp.length > 0) {
            const totalIncome = state.items.inc.reduce((acc, curr) => acc + parseInt(curr.value), 0);
            const domItemsPercentage = document.querySelectorAll('.item__percentage');
            state.items.exp.forEach((el, index) => {
                el.calcPercentage(totalIncome);
                domItemsPercentage[index].textContent = el.percentage;
            })
        }
    } else if (event) {
        let itemDomId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemDomId) {
            itemDomId = itemDomId.split('-');
            const itemType = itemDomId[0];
            const itemId = itemDomId[1];
            state.items[itemType].forEach((el, index) => {
                if (el.id === itemId) {
                    state.items[itemType].splice(index, 1);
                }
            })
        }
    } 
}; 

elements.inputButton.addEventListener('click', () => {
    controlItem();
    itemView.cleanInputs();
});

document.addEventListener('keypress', event => {
    if (event.keyCode === 13 || event.which == 13) {
        controlItem();
        itemView.cleanInputs();
    }
});

elements.inputType.addEventListener('change', () => {
    itemView.changeInputsColor();
});

elements.container.addEventListener('click', event => {
    controlItem(event);
    itemView.deleteItemList(event);
});