import * as base from './base';

export const showBudget = (budget) => {
    const type = budget.value <= 0 ? 'exp' : 'inc'; 
    base.elements.budgetValue.textContent = base.formatNumber(budget.value, type);
    base.elements.budgetIncomeValue.textContent = base.formatNumber(budget.income, 'inc');
    base.elements.budgetExpensesValue.textContent = base.formatNumber(budget.expenses, 'exp');
    base.elements.budgetExpensesPercentage.textContent = budget.percentage;
};

export const showDate = () => {
    base.elements.budgetTitleMonth.textContent = base.getDate();
}