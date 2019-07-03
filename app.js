console.log('hi');

const boxes = $('td');
let player = 'X';
let tie = 0;
let player1 = 'X';
let player2 = 'O';
let player1Score = 0;
let player2Score = 0;
//check function also switch turn
const changeOnCLick = function() {
    tie++;
    if (this.innerText == '') {
    this.innerText = player;
    //add the class move to animate the X,O
    this.classList += ' move';
    switch (player) {
        case player1:
            player = player2;

            break;
        default:
            player = player1;
            break;
        }  
    }
    // return the value of the winner and put it into variable
    const winner = win();
    if(winner){
        // check if the winner is X
        if (winner == player1) {
            player1Score++;
            document.querySelector('.score1').innerText = player1Score;
            // console.log(player1Score);  
        } 
        //check if the winner is O
        else {
            player2Score++;
            document.querySelector('.score2').innerText = player2Score;
            // console.log(player2Score)
        }
    }
}   
//==============Dom==================
const winnerDisplay = document.querySelector('#h1');
const winnerDiv = document.querySelector('#typewriter');
const drawDisplay = document.querySelector('#h2')
const drawDiv = document.querySelector('#typewriter1');

// The win function
const win = function() {
    //get the box ID
    const boxesValues= []
    for (let i = 1; i < 10; i++) {
        window['box'+i] = document.querySelector(`#box-${i}`).innerText || `${i}`  
    }
    // Array contain the conditions
    const check = [
        ( (box1 == box2) && (box1 == box3) )? box1: '', 
        ( (box4 == box5) && (box4 == box6) )? box4: '', 
        ( (box7 == box8) && (box7 == box9) )? box7: '',
        ( (box1 == box4) && (box1 == box7) )? box1: '',
        ( (box2 == box5) && (box2 == box8) )? box2: '',
        ( (box3 == box6) && (box3 == box9) )? box3: '',
        ( (box1 == box5) && (box1 == box9) )? box1: '',
        ( (box3 == box5) && (box3 == box7) )? box3: '',
    ]
    //check if the condition is true
    for (let i = 0; i < check.length; i++) {
        if(check[i]){
            winnerDisplay.classList += ' win'
            //add class typewriter to animate the winner
            winnerDiv.classList += ' typewriter'
            winnerDisplay.innerText = `winner ${check[i]}`
           //if winner is true then remove all the clicks
            boxes.unbind( "click", changeOnCLick );
            tie = 0;
            return  check[i];
        } 
    }
    if (tie === 9){
        // if it's draw then remove all the clicks
        boxes.unbind( "click", changeOnCLick );
        // add class typewriter to animate
        drawDiv.classList += ' typewriter'
        drawDisplay.innerText = `DRAW `
    // console.log('tie');
            }
    return false;
    }
    //Reset function 
    const resetGame = function () {
        //make all the inner text for td empty
        for (let i = 0; i < boxes.length; i++) {
             boxes[i].innerText = '' ;
        }
        //remove all the animated classes
        for (let i = 1; i < 10; i++) {
            window['box'+i] = document.querySelector(`#box-${i}`).classList.remove('move')  
        }
         winnerDisplay.innerText = ``;
         winnerDisplay.classList.remove('win');
         winnerDiv.classList.remove('typewriter');
         drawDiv.classList.remove('typewriter')
        drawDisplay.innerText = ``;
        boxes.click(changeOnCLick);
    }
    $('#reset').click(resetGame);
    boxes.click(changeOnCLick);