import confetti from "canvas-confetti"
import delay from "delay"

async function main(){
    const hint = document.getElementById('hint');
    while(true){
        hint.innerText = 'confetti'
        await confetti()
        hint.innerText = 'cooldown'
        await delay(1000)
    }
}

main()