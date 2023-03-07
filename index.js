var numberGeting =document.getElementById('input1').value;
var btn1 =document.getElementById('btn1');
var btn2 =document.getElementById('btn2');
const items= ["a","b","c","d","e"]; 


function getRandomElements(list){
    var numberGeting =document.getElementById('input1').value;
    return [...list].sort(()=>Math.random() >0.5 ?1:-1).slice(0,numberGeting);
}
function getNum() {
    document.getElementById('out1').innerHTML=getRandomElements(items);
   
}


function update(){
    var inputGeting =document.getElementById('input2').value.split(/\s*,+\s*/);
    items.push(...inputGeting);
    var index='';
    for(i=0;i<items.length;i++){
        index=index +items[i]
    }
    console.log(items);
}


btn1.addEventListener('click',getNum);
btn2.addEventListener('click',update);