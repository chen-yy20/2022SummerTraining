import confetti from "canvas-confetti"
import delay from "delay"
import Icon1 from './assets/chicken-soup.png'
import Icon2 from './assets/soup2.png'
import "./assets/index.css"

async function main(){
    var hint = document.getElementById('hint');
    var chicken = document.getElementById('chicken');
    while(true){
        hint.innerText = 'confetti';
        chicken.src = Icon1;  
        await confetti();
        hint.innerText = 'cooldown';
        chicken.src = Icon2;
        await delay(1000);
    }
}

main()