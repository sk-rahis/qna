let moves=document.getElementById('move');
let text= document.getElementById('con')


// let position=0;

// function move(){
//     position+=50;
//     moves.addEventListener('click',()=>{
//        document.getElementsByClassName('no')[0].style.left=position + 'px'
//        text.innerHTML='come on ,you know you want me😔'
//     })
// }

// function move(){
//     position+=50;
//     moves.addEventListener('click',()=>{
//        document.getElementsByClassName('no')[0].style.top=position + 'px'
//        text.innerHTML='come on ,you know you want me😔'
//     })
// }

let=position=0;
moves.addEventListener('mouseover',()=>{
    if(position===0){
        position+=70;
        document.getElementsByClassName('no')[0].style.left= position+'px';
        text.innerHTML='come on, you know you want me!😣';
        text.style.color='rgb(92, 9, 64)'
        text.style.fontWeight='bolder';
        moves.innerHTML='really?😣'
    }

    else if(position===70){
        position+=60;
        document.getElementsByClassName('no')[0].style.top= position +'px';
        text.style.color='rgb(92, 9, 64)'
        text.innerHTML='The button is scared now ! just say yes😣';

        text.style.fontWeight='bolder';
        moves.innerHTML='pleasss?😭'
    }

    else if(position===130){
        position-=170;
        document.getElementsByClassName('no')[0].style.top= position +'px';
        text.style.color='rgb(92, 9, 64)'
        text.innerHTML='The button is scared now ! just say yes😣';

        text.style.fontWeight='bolder';
        moves.innerHTML='pleasss?😭'
    }

         else if(position===40){
        position+=170;
        document.getElementsByClassName('no')[0].style.top= position +'px';
        text.style.color='rgb(92, 9, 64)'
        text.innerHTML='The button is scared now ! just say yes😣';

        text.style.fontWeight='bolder';
        moves.innerHTML='pleasss?😭'
    }
    else{
        position=0;
        document.getElementsByClassName('no')[0].style.top= position +'px'
        text.style.color='rgb(92, 9, 64)'
        text.innerHTML='The button is scared now ! just say yes😣';

        text.style.fontWeight='bolder';
        moves.innerHTML='pleasss?😭'
    }
  
  

})
