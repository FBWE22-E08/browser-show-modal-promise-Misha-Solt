import "./css/style.css"; //importing css

const modal = document.querySelector('.modal');
const close = document.querySelector('.close');


const pTime = new Promise((resolve, reject) => {
    setTimeout(() => {
        modal.style.display = 'block';
        close.style.cursor = 'pointer';
        resolve();
    }, 60000)
});
pTime.then(() => {
    close.onclick = () => {
        modal.style.display = 'none';
    }
})