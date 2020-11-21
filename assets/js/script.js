const select = (selectors) => document.querySelector(selectors);
const selectAll = (selectors) => document.querySelectorAll(selectors);

const addClass = (className) => (element) => element.classList.add(className);
const removeClass = (className) => (element) => {
    element.classList.remove(className);
};

const value = (element) => element.value;

(() => {
    const flippedClass = '-flipped';
    const flipElement = select('.flip');
    const calculate = select('#calculate');
    const back = select('#back');
    const expressionInput = select('#expression');
    const valuesInput = select('#values');
    const result = select('#result');

    const flip = addClass(flippedClass);
    const unflip = removeClass(flippedClass);

    calculate.addEventListener('click', () => {
        const expression = (x) => eval(value(expressionInput));
        const values = value(valuesInput)
            .split(';')
            .map((v) => Number(v.trim()));
        const results = values.map(expression);

        result.innerHTML = `[
${results.join(', ')}
]`;

        flip(flipElement);
    });

    back.addEventListener('click', () => unflip(flipElement));
})();
