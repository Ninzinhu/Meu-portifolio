function scrollToElement(elementSelector, instance = 0) {
    // Selecionar todos os elementos que correspondem ao seletor fornecido
    const elements = document.querySelectorAll(elementSelector);
    // Verifique se há elementos correspondentes ao seletor e se a instância solicitada existe
    if (elements.length > instance) {
        // Role até a instância especificada do elemento
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");

link1.addEventListener('click', () => {
    scrollToElement('.body');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

link4.addEventListener('click', () => {
    scrollToElement('.column');
});

link5.addEventListener('click', () => {
    scrollToElement('.column');
});