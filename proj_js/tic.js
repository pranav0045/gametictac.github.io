

console.log("javascript for tic tac toe");

let turn="x";
let gameover=false;

//function to change the turn()

function change_turn()
{
    return turn ==="x"?"O":"x";
}


//function to check win.
function check_win()
{
    let boxtexts=document.getElementsByClassName('boxtext');

    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

  
    
   
    wins.forEach(e=>{
      
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) &&((boxtexts[e[0]].innerText!== "")))
        {
            document.querySelector('.turn').innerText=boxtexts[e[0]].innerText+" is won";
            gameover=true;
           boxtexts[e[0]].style.backgroundColor="red";
           boxtexts[e[1]].style.backgroundColor="red";
           boxtexts[e[2]].style.backgroundColor="red";
 
           h1 =  document.createElement('h1');
           h1.innerHTML=`${boxtexts[e[0]].innerText} is won`;
           document.querySelector('.win-container').appendChild(h1);
         
           let v;
        setTimeout(() => {
            
             v=confirm("gameover play again");
            console.log(v);
            
        if(v){
            stop();
        }
            
        }, 1000);
        }

    })

}

function stop()
{

    let boxtext=document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach(val=>{
        val.style.backgroundColor="white";
        val.innerText="";
    })
    turn="x";
    document.getElementsByClassName('turn')[0].innerHTML=`turn for:${turn}`;
    gameover=false;
    
    document.querySelector('.win-container').removeChild(h1);


}




// game logic

let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(value=>{
    
    value.addEventListener('click',()=>{
        let boxtext=value.querySelector('.boxtext');
       
        if(boxtext.innerText==="")
        {
            boxtext.innerText=turn;
            turn=change_turn();
            if(!gameover)
            {
                document.getElementsByClassName('turn')[0].innerHTML=`turn for:${turn}`;

            }
            check_win();
            
        }
    

    })
})


//to reset the game

reset=document.getElementById('reset');

reset.addEventListener('click',()=>{

    let boxtext=document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach(val=>{
        val.style.backgroundColor="white";
        val.innerText="";
    })
    turn="x";
    document.getElementsByClassName('turn')[0].innerHTML=`turn for:${turn}`;
    gameover=false;
    
    document.querySelector('.win-container').removeChild(h1);


})