console.log('hi');

const boxes = $('td');
let player = 'X';

console.log(boxes);
let tie = 0;
let player1 = 'X';
let player2 = 'O';
// const player1Anime = "<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle id='circle' cx='50' cy='50' r='45'/> </svg>";
let player1Score = 0;
let player2Score = 0;
//========= DOM============
// const player1Input = document.getElementById('player1Name');
// const changeName = function() {
//     const player1Name = document.getElementById('player1');
//     player1Name.innerText = player1Input.value;   
// }

// document.querySelector('#player1').addEventListener('click', function(){
//     console.log(this);
//     console.log(this.select);
//     this.select();
// });

// player1Input.addEventListener('keypress', changeName);
const changeOnCLick = function() {
    tie++;
    if (this.innerText == '') {
    this.innerText = player;
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
    // debugger;
    const winner = win();
    if(winner){
        // debugger;
        if (winner == player1) {
            player1Score++;
            document.querySelector('.score1').innerText = player1Score;
            console.log(player1Score);
            
        } else {
            player2Score++;
            document.querySelector('.score2').innerText = player2Score;
            console.log(player2Score)
        }
    }
}   
// The win function
const winnerDisplay = document.querySelector('#h1');
const winnerDiv = document.querySelector('#typewriter');
const drawDisplay = document.querySelector('#h2')
const drawDiv = document.querySelector('#typewriter1');

const win = function() {
    //declare boxes
    const boxesValues= []
    for (let i = 1; i < 10; i++) {
        window['box'+i] = document.querySelector(`#box-${i}`).innerText || `${i}`  
    }
    //create array 
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
    for (let i = 0; i < check.length; i++) {
        if(check[i]){
            console.log(check[i])
             winnerDisplay.classList += ' win'
            winnerDiv.classList += ' typewriter'
            winnerDisplay.innerText = `winner ${check[i]}`
            console.log('winner', check[i]);
            boxes.unbind( "click", changeOnCLick );
            tie = 0;

            return  check[i];
        } 
    }
    if (tie === 9){
        boxes.unbind( "click", changeOnCLick );
        drawDiv.classList += ' typewriter'
        drawDisplay.innerText = `DRAW `
    console.log('tie');
            }
    return false;
    }

    const resetGame = function () {
        for (let i = 0; i < boxes.length; i++) {
             boxes[i].innerText = '' ;
        }
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