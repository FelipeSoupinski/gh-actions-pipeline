const display = document.getElementById('display');
const buttons = Array.from(document.getElementById('buttons').children);
let calculation = '';

buttons.map( button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText === 'C') {
            calculation = '';
            display.value = calculation;
            return;
        }

        if (buttonText === '=') {
            try {
                calculation = eval(calculation);
            } catch {
                calculation = 'Error';
            }
            display.value = calculation;
            return;
        }

        calculation += buttonText;
        display.value = calculation;
    });
});