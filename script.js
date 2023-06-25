function getComputer(){
    let a = Math.random()*100;
    if(a>=60){
        return 'rock';
    }
    else if(a>=30){
        return 'scissors';
    }
    else{
        return 'paper';
    }
}
function getuser(){
    let b = prompt("enter your choice");
    return b;
}
function play(user,comp){
    if(user == comp){
        return 'draw';
    }
    else if((user=='scissors'&&comp=='paper')||(user=='rock'&&comp=='scissors')||(user=='paper'&comp=='rock')){
        return 'user wins';
    }
    else{
        return 'computer wins';
    }
}
let user =getuser();
let comp = getComputer();
console.log(play(user,comp))
