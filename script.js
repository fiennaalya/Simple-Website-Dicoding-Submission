const text = "I'm a Fresh Graduate with a strong focus on technology and innovation";
const typedTextElement = document.getElementById('typed-text');
let index = 0;

function typeText() {
    if (index < text.length) {
        typedTextElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 30); // Waktu jeda antara setiap karakter (50ms)
    }
}

typeText(); 