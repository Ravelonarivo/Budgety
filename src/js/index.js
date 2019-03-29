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
const controlItem = () => {

    if (elements.inputDescription.value && elements.inputValue.value) {
        const item = new Item(elements.inputType.value, elements.inputDescription.value, elements.inputValue.value);  
        
        state.items[item.type].push(item);

        itemView.addListItem(item);

        if (state.items.exp.length > 0) {
            const totalIncome = state.items.inc.reduce((acc, curr) => acc + parseInt(curr.value), 0);
            const domItemsPercentage = document.querySelectorAll('.item__percentage');
            state.items.exp.forEach((el, index) => {
                el.calcPercentage(totalIncome);
                domItemsPercentage[index].textContent = el.percentage;
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