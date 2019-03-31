export default class Budget {
    constructor() {
        this.income = 0;
        this.expenses = 0;
    }

    calcValue() {
        this.value = this.income - this.expenses; 
    };

    calcPercentage() {
        this.percentage = this.income > 0 ? (this.expenses / this.income) * 100 + '%' : '---';
    }
}