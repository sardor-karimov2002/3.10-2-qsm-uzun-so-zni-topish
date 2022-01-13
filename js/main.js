var form=document.getElementById('form')
var text=document.getElementById('text')
var uzunsoz=document.getElementById('result')

form.addEventListener('submit', event=>{
    event.preventDefault()
    uzunsoz.textContent=findLongest(text)

})


function findLongest(text=""){
    var text=text.value;
    let  words=text.split(' ');
    let longest = "";
    for(let i=0; i<words.length;i++){
        if(words[i].length>longest.length){
            longest=words[i];
        }
    }
    return longest
}
// console.log(findLongest(matn))








// var text="Mening vatanim O'zbekiston. Men O'zbewkistonda yashayman. O'zbekiswwton quyoshli yurt"
// function findLongest(text=""){
//     let  words=text.split(' ');
//     let longest = "";
//     for(let i=0; i<words.length;i++){
//         if(words[i].length>longest.length){
//             longest=words[i];
//         }
//     }
//     return longest
// }
// console.log(findLongest(text))