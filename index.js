let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count =document.getElementById("num")

/* function increment(){
    count++
    countEl.textContent=count
} */
function save(){

    let zen = count.value + " ⦾ "
    saveEl.textContent+=zen
    count.value=null


}