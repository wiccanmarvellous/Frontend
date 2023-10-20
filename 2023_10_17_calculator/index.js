let input = document.getElementById('input');
let output = document.getElementById('output');

document.addEventListener('click', (event) => {
    const key = event.target.id;

    if (key === 'AC') {
        input.value = '' ;
        output.textContent = '';
    }
    else if (key === 'C')   input.value = input.value.slice(0, -1);
    else if (key === '=')   output.textContent = eval(input.value);
    else input.value += key;
});

