import { elements } from './base';

export const changeInputsColor = () => {
   
    elements.inputType.classList.toggle('red-focus');
    elements.inputDescription.classList.toggle('red-focus');
    elements.inputValue.classList.toggle('red-focus');
    elements.inputButton.classList.toggle('red');
} 