// incomplete
// need to find a way to parse data

const tabItemList = document.getElementsByClassName("tabItem")
let currSeason;

for(i in tabItemList){
    if(tabItemList[i].attributes && tabItemList[i].attributes.style.nodeValue === "display: block;" && tabItemList[i].attributes[0].nodeValue.includes("season")){
      currSeason = tabItemList[i]
    }
}

const removeT = currSeason.textContent.replaceAll('\t', '')
const removeN = removeT.replaceAll('\n', '')

console.log(removeN.split('W'))
