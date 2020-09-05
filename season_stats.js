const wins = document.getElementsByClassName("Text Left")
const losses = document.getElementsByClassName("Text Right")

const winArr = []
const lossArr = []

for(i in wins){
    if(wins[i].innerText){
        const getWs = wins[i].innerText
        const removeLtr = getWs.slice(0, -1)
        winArr.push(parseInt(removeLtr))
    }
}

for(i in losses){
    if(losses[i].innerText){
        const getLs = losses[i].innerText
        const removeLtr = getLs.slice(0, -1)
        lossArr.push(parseInt(removeLtr))
    }
}

const winSum = winArr.reduce((a, b) => a + b)
const lossSum = lossArr.reduce((a, b) => a + b)

console.log(winSum, "W", lossSum, "L")
console.log(winSum + lossSum, "Total")
console.log(winSum / (winSum + lossSum) * 100, "wr")
