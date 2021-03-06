const quoteText = document.querySelector('.quote-text');
const author = document.querySelector('.author');
const generateBtn = document.querySelector('.generate');

window.addEventListener('load', async () => {
    try {
        let nodeResult = await fetch('https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random');
        let result = await nodeResult.json();
        quoteText.innerHTML = result[0].q;
        author.innerHTML = result[0].a;
    } catch (error) {
        alert(error);
    }
});

generateBtn.addEventListener('click', async e =>  {
    e.defaultPrevented;
    try {
        let nodeResult = await fetch('https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random');
        let result = await nodeResult.json();
        quoteText.innerHTML = result[0].q;
        author.innerHTML = result[0].a;
    } catch (error) {
        alert(error);
    }
});