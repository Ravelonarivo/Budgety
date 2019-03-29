import uniqid from 'uniqid';

export default class Item {

    constructor(type, description, value) {
        this.id = uniqid();
        this.type = type;
        this.description = description;
        this.value = value;
    }

    calcPercentage(totalIncome) {       
        this.percentage = totalIncome > 0 ? Math.round((this.value * 100) / totalIncome) + '%' : '---';
    }
}