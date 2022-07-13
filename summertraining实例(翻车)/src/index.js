import confetti from 'canvas-confetti';
import delay from 'delay';
import "./assets/main.css";

async function main() {
    var hint = document.getElementById('hint');
    while(true){
        hint.innerText = 'confetti';
        await confetti();
        hint.innerText = 'cooldown';
        await delay(1000);
    }
}

main();