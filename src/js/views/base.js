export const elements = {
    inputType: document.querySelector('.add__type'),
    inputDescription: document.querySelector('.add__description'),
    inputValue: document.querySelector('.add__value'),
    inputButton: document.querySelector('.add__btn'),

    incomeList: document.querySelector('.income__list'),
    expensesList: document.querySelector('.expenses__list'),

    container: document.querySelector('.container'),

    budgetValue: document.querySelector('.budget__value'),
    budgetIncomeValue: document.querySelector('.budget__income--value'),
    budgetExpensesValue: document.querySelector('.budget__expenses--value'),
    budgetExpensesPercentage: document.querySelector('.budget__expenses--percentage')
};

export const formatNumber = (num, type) => {

    let numSplit, int, dec;

    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');
    int = numSplit[0];
    dec = numSplit[1];

    if (int.length > 3) {
        int = int.substring(0, int.length - 3) + ',' + int.substring(int.length - 3);
    }

    return (type === 'inc' ? '+ ' : '- ') + int + '.' + dec;
};