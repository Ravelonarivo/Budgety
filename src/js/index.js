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