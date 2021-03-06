import * as base from './base';

export const changeInputsColor = () => {
   
    base.elements.inputType.classList.toggle('red-focus');
    base.elements.inputDescription.classList.toggle('red-focus');
    base.elements.inputValue.classList.toggle('red-focus');
    base.elements.inputButton.classList.toggle('red');
}; 

export const cleanInputs = () => {
    base.elements.inputDescription.value = '';
    base.elements.inputValue.value = '';
};

export const addListItem = (item) => {
    let markup; 
    if (item.type === 'inc') {
        markup = `
            <div class="item clearfix" id="inc-${item.id}">
                <div class="item__description">${item.description}</div>
                <div class="right clearfix">
                    <div class="item__value">${base.formatNumber(parseFloat(item.value), item.type)}</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
        `;

        base.elements.incomeList.insertAdjacentHTML('beforeend', markup);

    } else if (item.type === 'exp') {
        markup = `
            <div class="item clearfix" id="exp-${item.id}">
                <div class="item__description">${item.description}</div>
                <div class="right clearfix">
                    <div class="item__value">${base.formatNumber(parseFloat(item.value), item.type)}</div>
                    <div class="item__percentage">${item.percentage}</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
        `;

        base.elements.expensesList.insertAdjacentHTML('beforeend', markup);
    }  
};

export const updatePercentages = (expenses, totalIncome) => {  
    const domItemsPercentage = document.querySelectorAll('.item__percentage');
    expenses.forEach((el, index) => {
        el.calcPercentage(totalIncome);
        domItemsPercentage[index].textContent = el.percentage;
    })
}

export const deleteItemList = event => {
    const itemDom = event.target.parentNode.parentNode.parentNode.parentNode;
    if (itemDom.id) {
        itemDom.parentNode.removeChild(itemDom);
    } 
};