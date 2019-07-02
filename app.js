console.log('hi');

const boxes = $('td');
// const box1 = $('#box-1');
let player = 'X';
console.log(boxes);
// box1.css('background', 'red');
let player1 = 'X';
let player2 = 'O';
let player1Score = 0;
let player2Score = 0;
const changeOnCLick = function() {
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
            
        } else {
            player2Score++;
        }
    }
    console.log(player1Score);
}   

const win = function() {
    //declare boxes
    for (let i = 1; i < 10; i++) {
        window['box'+i] = document.querySelector(`#box-${i}`).innerText || `${i}`  
    }
    // let box1 = document.querySelector('#box-1').innerText || '1'
    // let box2 = document.querySelector('#box-2').innerText || '2'
    // let box3 = document.querySelector('#box-3').innerText || '3'
    // let box4 = document.querySelector('#box-4').innerText || '4'
    // let box5 = document.querySelector('#box-5').innerText || '5'
    // let box6 = document.querySelector('#box-6').innerText || '6'
    // let box7 = document.querySelector('#box-7').innerText || '7'
    // let box8 = document.querySelector('#box-8').innerText || '8'
    // let box9 = document.querySelector('#box-9').innerText || '9'

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
            return  check[i];
        }
    }
    return '';
    }
    boxes.click(changeOnCLick);