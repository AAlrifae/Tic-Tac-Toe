console.log('hi');

const boxes = $('td');
let player = 'X';

console.log(boxes);
let tie = 0;
let player1 = 'X';
let player2 = 'O';
let player1Score = 0;
let player2Score = 0;
//========= DOM============
// const player1Input = document.querySelector('#player1Input').value
var player1Input = $('#player1Input').val();
const player2Input = $('#player2Input').val()

$('#player1').val(player2Input);
$('#player1').innerText = player2Input

const changeOnCLick = function() {
    tie++;
    if (this.innerText == '') {
    this.innerText = player;
    switch (player) {
        case player1:
            player = player2;
            break;
        default:
            player = player1;
            break;
        }  
    }
    const winner = win();
    if(winner){
        if (winner == player1) {
            player1Score++;
            console.log(player1Score);
            
        } else {
            player2Score++;
            console.log(player2Score)
        }
    }
}   

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
            console.log('winner', check[i]);
            boxes.unbind( "click", changeOnCLick );
            tie = 0;
            return  check[i];
        } 
    }
    if (tie === 9){
    console.log('tie');}
    return '';
    }

    const resetGame = function () {
        for (let i = 0; i < boxes.length; i++) {
             boxes[i].innerText = ''         
        }
        boxes.click(changeOnCLick);
    }

    // const tie = function() {
        
    // }


    $('.reset').click(resetGame);
    boxes.click(changeOnCLick);