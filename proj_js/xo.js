

//javascript code for the tic tac toe.

let turn="X";
let gameover=false;

//function for changing the turn.

function change_turn()
{
   return turn==="X"?"O":"X";
}


//logic for reset

function reset()
{
        

    res=document.getElementById('btn')
    
    res.addEventListener('click',()=>{

        stop();
        
    })

    
    
}

//function for restart()

function stop()
{

   
    box = document.getElementsByClassName('box')

    Array.from(box).forEach(val =>{
          val.innerHTML="";
          val.style.backgroundColor="white";
        })
            
    turn="X";
    document.getElementById('turn').innerHTML=`turn for ${turn}`;

}


//function for winnnig 

function winner()
{
    /*0 1 2 
      3 4 5
      6 7 8*/

      b1=document.getElementById('box1');
      b2=document.getElementById('box2');
      b3=document.getElementById('box3');
      b4=document.getElementById('box4');
      b5=document.getElementById('box5');
      b6=document.getElementById('box6');
      b7=document.getElementById('box7');
      b8=document.getElementById('box8');
      b9=document.getElementById('box9');

      if((b1.innerHTML===b2.innerHTML) && (b2.innerHTML===b3.innerHTML)&& (b1.innerHTML!==""))
      {
        document.getElementById('turn').innerHTML=b1.innerHTML+" is won";
        b1.style.backgroundColor="gray";
        b2.style.backgroundColor="gray";
        b3.style.backgroundColor="gray";
       
        setTimeout(() => {
            let take= confirm("game over play again");
            if(take)
            {
                stop();
            }
            
        }, 1000);
         
      }

      else if((b4.innerHTML===b5.innerHTML) && (b5.innerHTML===b6.innerHTML)&& (b4.innerHTML!=="")){

        document.getElementById('turn').innerHTML=b4.innerHTML+" is won";
        b4.style.backgroundColor="gray";
        b5.style.backgroundColor="gray";
        b6.style.backgroundColor="gray";

        setTimeout(() => {
            let take= confirm("game over play again");
            if(take)
            {
                stop();
            }
            
        }, 1000);

      }

      else if((b7.innerHTML===b8.innerHTML) && (b8.innerHTML===b9.innerHTML)&& (b7.innerHTML!=="")){

        document.getElementById('turn').innerHTML=b7.innerHTML+" is won";
        b7.style.backgroundColor="gray";
        b8.style.backgroundColor="gray";
        b9.style.backgroundColor="gray";

        setTimeout(() => {
            let take= confirm("game over play again");
            if(take)
            {
                stop();
            }
            
        }, 1000);

      }

    //for vertical cases.
      
    else if((b1.innerHTML===b4.innerHTML) && (b4.innerHTML===b7.innerHTML)&& (b1.innerHTML!=="")){

        document.getElementById('turn').innerHTML=b1.innerHTML+" is won";

        b1.style.backgroundColor="gray";
        b4.style.backgroundColor="gray";
        b7.style.backgroundColor="gray";

        setTimeout(() => {
            let take= confirm("game over play again");
            if(take)
            {
                stop();
            }
            
        }, 1000);
      }

      else if((b2.innerHTML===b5.innerHTML) && (b5.innerHTML===b8.innerHTML)&& (b2.innerHTML!=="")){

        document.getElementById('turn').innerHTML=b2.innerHTML+" is won";
        b2.style.backgroundColor="gray";
        b5.style.backgroundColor="gray";
        b8.style.backgroundColor="gray";

        setTimeout(() => {
            let take= confirm("game over play again");
            if(take)
            {
                stop();
            }
            
        }, 1000);

      }

      else if((b3.innerHTML===b6.innerHTML) && (b6.innerHTML===b9.innerHTML)&& (b3.innerHTML!=="")){

        document.getElementById('turn').innerHTML=b3.innerHTML+" is won";
        b3.style.backgroundColor="gray";
        b6.style.backgroundColor="gray";
        b9.style.backgroundColor="gray";

        setTimeout(() => {
            let take= confirm("game over play again");
            if(take)
            {
                stop();
            }
            
        }, 1000);

      }


      //for diagonal cases

      else if((b3.innerHTML===b5.innerHTML) && (b5.innerHTML===b7.innerHTML)&& (b3.innerHTML!=="")){

        document.getElementById('turn').innerHTML=b3.innerHTML+" is won";
        b3.style.backgroundColor="gray";
        b5.style.backgroundColor="gray";
        b7.style.backgroundColor="gray";

        setTimeout(() => {
            let take= confirm("game over play again");
            if(take)
            {
                stop();
            }
            
        }, 1000);

      }
      
      
      else if((b1.innerHTML===b5.innerHTML) && (b5.innerHTML===b9.innerHTML)&& (b1.innerHTML!=="")){

        document.getElementById('turn').innerHTML=b1.innerHTML+" is won";
        b1.style.backgroundColor="gray";
        b5.style.backgroundColor="gray";
        b9.style.backgroundColor="gray";

        setTimeout(() => {
            let take= confirm("game over play again");
            if(take)
            {
                stop();
            }
            
        }, 1000);

      }
      
      

}


//fucntion to run the main logic.

function main_func()
{

    //lets get the boxes first.

    let boxes=document.getElementsByClassName('box');

    Array.from(boxes).forEach(val=>{
        val.addEventListener('click',()=>{
            console.log("clicked");
            if(val.innerHTML==="")
            {
            val.innerHTML=turn;
            turn=change_turn();

                document.getElementById('turn').innerHTML=`turn for ${turn}`;
        
        }
        winner();


        })
    })
}



//calling functions

main_func();
reset();