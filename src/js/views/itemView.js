import { elements, formatNumber } from './base';

export const changeInputsColor = () => {
   
    elements.inputType.classList.toggle('red-focus');
    elements.inputDescription.classList.toggle('red-focus');
    elements.inputValue.classList.toggle('red-focus');
    elements.inputButton.classList.toggle('red');
}; 

export const cleanInputs = () => {
    elements.inputDescription.value = '';
    elements.inputValue.value = '';
};

export const addListItem = (item) => {
    let markup;
    if (item.type === 'inc') {
        markup = `
            <div class="item clearfix" id="inc-${item.id}">
                <div class="item__description">${item.description}</div>
                <div class="right clearfix">
                    <div class="item__value">${formatNumber(parseFloat(item.value), item.type)}</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
        `;

        elements.incomeList.insertAdjacentHTML('beforeend', markup);

    } else if (item.type === 'exp') {
        markup = `
            <div class="item clearfix" id="exp-${item.id}">
                <div class="item__description">${item.description}</div>
                <div class="right clearfix">
                    <div class="item__value">${formatNumber(parseFloat(item.value), item.type)}</div>
                    <div class="item__percentage">${item.percentage}</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
        `;

        elements.expensesList.insertAdjacentHTML('beforeend', markup);
    }  
};

export const deleteItemList = event => {
    const itemDom = event.target.parentNode.parentNode.parentNode.parentNode;
    if (itemDom.id) {
        itemDom.parentNode.removeChild(itemDom);
    } 
};