const btn = document.getElementById('btn');
const load = document.getElementById('load-line');

btn.addEventListener('click', () => {
    load.style.animation = "10s linear 0s 1 forwards loading";
})