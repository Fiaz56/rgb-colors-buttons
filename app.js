const buttons = document.querySelectorAll("button");

for(let btn of buttons){
    btn.addEventListener("click", function () {
        btn.style.backgroundColor = randomColor();
        btn.innerText = randomColor();
    })
};

const randomColor = function (){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};