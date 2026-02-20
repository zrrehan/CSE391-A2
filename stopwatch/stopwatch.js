let time = 0

const myfunction = () => {
    console.log("hello")
    if(time != 30) {
        time += 3
    }
    document.querySelector(".time").innerText = time;

}

let  setInterId = null;
document.querySelector("#start").addEventListener("click", () => {
    if(!setInterId) {
        setInterId = setInterval(myfunction, 1000);
    }
    console.log(setInterId);
});

document.querySelector("#pause").addEventListener("click", () => {
    clearInterval(setInterId);
    setInterId = null;
});

document.querySelector("#reset").addEventListener("click", () => {
    clearInterval(setInterId);
    setInterId = null;
    document.querySelector(".time").innerText = 0;
    time = 0;
})