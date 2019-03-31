import { elements, formatNumber} from './base';

export const showBudget = (budget) => {
    const type = budget.value <= 0 ? 'exp' : 'inc'; 
    elements.budgetValue.textContent = formatNumber(budget.value, type);
    elements.budgetIncomeValue.textContent = formatNumber(budget.income, 'inc');
    elements.budgetExpensesValue.textContent = formatNumber(budget.expenses, 'exp');
    elements.budgetExpensesPercentage.textContent = budget.percentage;
};