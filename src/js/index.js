import Item from './models/Item';
import Budget from './models/Budget';

import { elements } from './views/base';

import * as itemView from './views/itemView';
import * as budgetView from './views/budgetView';

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

    // Add item
    if (elements.inputDescription.value && elements.inputValue.value) {

        // Create item
        const item = new Item(elements.inputType.value, elements.inputDescription.value, elements.inputValue.value);  
        
        if (item.type === 'inc') {
            // Add item to state
            state.items[item.type].push(item);

            // Calculate total income and add it to state
            state.totalInc = state.items.inc.reduce((acc, curr) => acc + parseInt(curr.value), 0);

            // Update percentages
            if (state.items.exp.length > 0) {
                itemView.updatePercentages(state.items.exp, state.totalInc);
            }      
        } else if (item.type === 'exp') {
            // Calculate percentage
            item.calcPercentage(state.totalInc);

            // Add item to state
            state.items[item.type].push(item);

            // Calculate total expenses and add it to state
            state.totalExp = state.items.exp.reduce((acc, curr) => acc + parseInt(curr.value), 0);
        }

        // Add item to dom
        itemView.addListItem(item);

    }
    
    // Remove item
    if (event) {
        let itemDomId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemDomId) {
            itemDomId = itemDomId.split('-');
            const itemType = itemDomId[0];
            const itemId = itemDomId[1];
            const itemIndex = state.items[itemType].findIndex(el => el.id === itemId);
            // Remove item to state
            state.items[itemType].splice(itemIndex, 1);

            if (itemType === 'inc') {
                // Update total income
                state.totalInc = state.items.inc.reduce((acc, curr) => acc + parseInt(curr.value), 0);

                // Update percentages
                if (state.items.exp.length > 0) {
                    itemView.updatePercentages(state.items.exp, state.totalInc);
                } 
            } else if (itemType === 'exp') {
                // Update total expenses
                state.totalExp = state.items.exp.reduce((acc, curr) => acc + parseInt(curr.value), 0);
            }
        }
    } 
};


/**
 * Budget controller
 */
const controlBudget = () => {
    
    if (state.items.inc.length === 0 && state.items.exp.length === 0) {
        state.budget = new Budget();
    } else {
        state.budget.income = state.items.inc.length > 0 ? state.totalInc : 0;
        state.budget.expenses = state.items.exp.length > 0 ? state.totalExp : 0;
    }

    state.budget.calcValue();
    state.budget.calcPercentage();

    budgetView.showBudget(state.budget);
}

window.addEventListener('load', () => {
    controlBudget();
})

elements.inputButton.addEventListener('click', () => {
    controlItem();
    controlBudget();
    itemView.cleanInputs();
});

document.addEventListener('keypress', event => {
    if (event.keyCode === 13 || event.which == 13) {
        controlItem();
        controlBudget();
        itemView.cleanInputs();
    }
});

elements.inputType.addEventListener('change', () => {
    itemView.changeInputsColor();
});

elements.container.addEventListener('click', event => {
    controlItem(event);
    controlBudget();
    itemView.deleteItemList(event);
});