function randomColor(){
    const hex = '123456ABCDEF';
    let color = '#';

    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}


const start = document.getElementById('start');
const stop = document.getElementById('stop');
let intervalId;
function startChangingColor(){
    if(!intervalId){
        intervalId = setInterval(changeBg,1000);
    }
    
    function changeBg(){
        document.body.style.backgroundColor = randomColor();
    }
    
}
function stopChangingColor(){
    clearInterval(intervalId);
    intervalId = null;

}
start.addEventListener('click',startChangingColor);
stop.addEventListener('click',stopChangingColor);