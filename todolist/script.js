const todolist = [];

function displaytodolist(){
    var thedisplay = ``;
    if (todolist.length == 0){
        document.querySelector('.add-list').innerHTML = thedisplay;
    }else{
        for (let ithree=0;ithree<todolist.length;ithree++){
            thedisplay += "<div><p>" + todolist[ithree][0] + "</p><p>" + todolist[ithree][1] + "</p>" + `<button onclick='removebutton(${ithree});'>remove</button></div>`;
            document.querySelector('.add-list').innerHTML = thedisplay;
        }
    }

}

function addtodo(){
    var theaddwhat = document.getElementById('add-value');
    var thetimwhat = document.getElementById('add-date');
    var theaddedva = theaddwhat.value;
    var theadddate = thetimwhat.value;
    todolist.push([theaddedva, theadddate]);
    displaytodolist();
    document.querySelector('#add-value').value = '';
}

function removebutton(num){
    // if (num == 0){
    //     console.log(todolist)
    //     todolist.pop();
    // }else{
    todolist.splice(num, 1);
    // }
    displaytodolist();
}

function removetodo(){
    document.querySelector(".add-list").innerHTML = "";
    todolist.length = 0;
}

let i = 0;
while (i < 10){
    console.log(i);
    i++;
}
for (let itwo=0;itwo<=6;itwo++){
    console.log(itwo);
}

let randomnum = 1;
function randomness(){
    while (randomnum > 0.5){
        randomnum = Math.random();
        console.log(randomnum);
    }
}
randomness();

numarryeet = [5,10,999,111,78,67];
let totalnumyeet = 0;
for (i=0;i<numarryeet.length;i++){
    totalnumyeet+=numarryeet[i];
    console.log(numarryeet[i]);
}
console.log(totalnumyeet);

console.log("finish");