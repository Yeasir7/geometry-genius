function getInputValueById(inputId) {
    const inputTextValue = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputTextValue);
    return inputValue;
}

function setAreaValue(setValue, area) {
    const element = document.getElementById(setValue);
    element.innerText = area;
}

function calcRecArea() {
    const length = getInputValueById('rectangle-length');
    const width = getInputValueById('rectangle-width');
    const area = length * width;

    setAreaValue('rectangle-area', area);
}
