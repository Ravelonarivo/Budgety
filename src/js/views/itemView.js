import { elements } from './base';

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
            <div class="item clearfix" id="income-${item.id}">
                <div class="item__description">${item.description}</div>
                <div class="right clearfix">
                    <div class="item__value">+ ${item.value}</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
        `;

        elements.incomeList.insertAdjacentHTML('beforeend', markup);

    } else if (item.type === 'exp') {
        markup = `
            <div class="item clearfix" id="expense-${item.id}">
                <div class="item__description">${item.description}</div>
                <div class="right clearfix">
                    <div class="item__value">- ${item.value}</div>
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