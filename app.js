console.log('hi');

const boxes = $('td');
// const box1 = $('#box-1');
let player = 'X';
console.log(boxes);
// box1.css('background', 'red');
let player1 = 'X';
let player2 = 'O';
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
    win();
}   

const win = function() {
    let box1 = document.querySelector('#box-1').innerText
    console.log(box1);
    let box2 = document.querySelector('#box-2').innerText
    let box3 = document.querySelector('#box-3').innerText
    let box4 = document.querySelector('#box-4').innerText
        if( (box1 == box2) && (box2 == box3) )  {
            console.log('win')
        } else{
            console.log('lose')
        }
    }
    boxes.click(changeOnCLick);

 
