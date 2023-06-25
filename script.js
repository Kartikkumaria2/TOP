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
    user  = user.toLowerCase()
    let result= ''
    if(user == comp){
        result = 'draw';
    }
    else if((user=='scissors'&&comp=='paper')||(user=='rock'&&comp=='scissors')||(user=='paper'&comp=='rock')){
        result = 'user wins';
    }
    else{
        result = 'computer wins';
    }

    return result;
    

}
const container = document.querySelector('.userb')
const div  = document.createElement('div');
div.style.fontSize = '72px';
div.style.flex = '1';
div.style.height = '40%';
    div.classList.add('new');
    container.appendChild(div);
const btns = document.querySelectorAll('.comm');
btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       let l = btn.innerHTML;
       div.textContent =  play(l,getComputer());
       
       
       
    })
}

)


