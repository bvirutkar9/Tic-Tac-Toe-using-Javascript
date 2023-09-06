

// getting access to  each boxes 
const a11 = document.getElementById('1*1')
const a12 = document.getElementById('1*2')
const a13 = document.getElementById('1*3')
const a21 = document.getElementById('2*1')
const a22 = document.getElementById('2*2')
const a23 = document.getElementById('2*3')
const a31 = document.getElementById('3*1')
const a32 = document.getElementById('3*2')
const a33 = document.getElementById('3*3')

// getting element of all the block 


var chance = true; //to make alternate chances 
var count=0; // to check if all the boxes arre filled 

// adding eventListener to each boxes so that on clicking it necessary operation takes palce 
a11.addEventListener('click',function(){
    if(completed(array)==true){
        // if game is completed 
        if (confirm("game is completed! Do you want to start new game?")) {
            location.reload();
        }
    }
    else if(a11.textContent=="X" || a11.textContent=="0"){
        // if you double tap on already filled boxes 
        alert("The box is already filled!!");
    }
    else{
        // normal condition 
        if(chance==true){
            putX(a11);
            array[0]="X";
            count++;
            chance=false;
        }
        else{
            put0(a11);
            array[0]="0";
            count++;
            chance=true;
        }
        check(array);
    }
});
a12.addEventListener('click',function(){
    if(completed(array)==true){
        if (confirm("game is completed! Do you want to start new game?")) {
            location.reload();
        }
    }
    else if(a12.textContent=="X" || a12.textContent=="0"){
        alert("The box is already filled!!");
    }
    else{
        if(chance==true){
            putX(a12);
            array[1]="X";
            count++;
            chance=false;
        }
        else{
            put0(a12);
            array[1]="0";
            count++;
            chance=true;
        }
        check(array)
    }
});
a13.addEventListener('click',function(){
    if(completed(array)==true){
        if (confirm("game is completed! Do you want to start new game?")) {
            location.reload();
        }
    }
    else if(a13.textContent=="X" || a13.textContent=="0"){
        alert("The box is already filled!!");
    }
    else{
        if(chance==true){
            putX(a13);
            array[2]="X";
            count++;
            chance=false;
        }
        else{
            put0(a13);
            array[2]="0";
            count++;
            chance=true;
        }
        check(array)
    }
});
a21.addEventListener('click',function(){
    if(completed(array)==true){
        if (confirm("game is completed! Do you want to start new game?")) {
            location.reload();
        }
    }
    else if(a21.textContent=="X" || a21.textContent=="0"){
        alert("The box is already filled!!");
    }
    else{
        if(chance==true){
            putX(a21);
            array[3]="X";
            count++;
            chance=false;
        }
        else{
            put0(a21);
            array[3]="0";
            count++;
            chance=true;
        }
        check(array)
    }
});
a22.addEventListener('click',function(){
    if(completed(array)==true){
        if (confirm("game is completed! Do you want to start new game?")) {
            location.reload();
        }
    }
    else if(a22.textContent=="X" || a22.textContent=="0"){
        alert("The box is already filled!!");
    }
    else{
        if(chance==true){
            putX(a22);
            array[4]="X";
            count++;
            chance=false;
        }
        else{
            put0(a22);
            array[4]="0";
            count++;
            chance=true;
        }
        check(array)
    }
});
a23.addEventListener('click',function(){
    if(completed(array)==true){
        if (confirm("game is completed! Do you want to start new game?")) {
            location.reload();
        }
    }
    else if(a23.textContent=="X" || a23.textContent=="0"){
        alert("The box is already filled!!");
    }
    else{
        if(chance==true){
            putX(a23);
            array[5]="X";
            count++;
            chance=false;
        }
        else{
            put0(a23);
            array[5]="0";
            count++;
            chance=true;
        }
        check(array)
    }
});
a31.addEventListener('click',function(){
    if(completed(array)==true){
        if (confirm("game is completed! Do you want to start new game?")) {
            location.reload();
        }
    }
    else if(a31.textContent=="X" || a31.textContent=="0"){
        alert("The box is already filled!!");
    }
    else{
        if(chance==true){
            putX(a31);
            array[6]="X";
            count++;
            chance=false;
        }
        else{
            put0(a31);
            array[6]="0";
            count++;
            chance=true;
        }
        check(array)
    }
});
a32.addEventListener('click',function(){
    if(completed(array)==true){
        if (confirm("game is completed! Do you want to start new game?")) {
            location.reload();
        }
    }
    else if(a32.textContent=="X" || a32.textContent=="0"){
        alert("The box is already filled!!");
    }
    else{
        if(chance==true){
            putX(a32);
            array[7]="X";
            count++;
            chance=false;
        }
        else{
            put0(a32);
            array[7]="0";
            count++;
            chance=true;
        }
        check(array)
    }
});
a33.addEventListener('click',function(){
    if(completed(array)==true){
        if (confirm("game is completed! Do you want to start new game?")) {
            location.reload();
        }
    }
    else if(a33.textContent=="X" || a33.textContent=="0"){
        alert("The box is already filled!!");
    }
    else{
        if(chance==true){
            putX(a33);
            array[8]="X";
            count++;
            chance=false;
        }
        else{
            put0(a33);
            array[8]="0";
            count++;
            chance=true;
        }
        check(array)
    }
});

// function to put X on player with X's chance 
function putX(x){
    x.textContent="X"; 
    x.style.backgroundColor = 'green';
}
// function to put 0 on player with 0's chance 
function put0(x){
    x.textContent="0"; 
    x.style.backgroundColor = 'blue';
}

// array to check the winning condition 
const array = [ "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" ];


const decision = document.getElementById('decision')


// function to check if game is won or draw 
function check(array){
    if(array[0]==array[1] && a11.textContent==a13.textContent){
        // 1st row condition or we can check the condition like above
        decision.textContent=`player with ${array[0]} is the winner`;
    }
    else if(array[3]==array[4] && array[3]==array[5]){
        // 2nd row condition 
        decision.textContent=`player with ${array[3]} is the winner`;
    }
    else if(array[6]==array[7] && array[7]==array[8]){
        // 3rd row condition 
        decision.textContent=`player with ${array[6]} is the winner`;
    }
    else if(array[0]==array[3] && array[0]==array[6]){
        // 1st coloumn condition 
        decision.textContent=`player with ${array[0]} is the winner`;
    }
    else if(array[1]==array[4] && array[1]==array[7]){
        // 2nd coloumn condition 
        decision.textContent=`player with ${array[1]} is the winner`;
    }
    else if(array[2]==array[5] && array[2]==array[8]){
        // 3rd coloumn condition 
        decision.textContent=`player with ${array[2]} is the winner`;
    }
    else if(array[0]==array[4] && array[0]==array[8]){
        // 1st diagonal condition 
        decision.textContent=`player with ${array[0]} is the winner`;
    }
    else if(array[2]==array[4] && array[2]==array[6]){
        // 2nd diagonal condition 
        decision.textContent=`player with ${array[2]} is the winner`;
    }
    
    else if(count==9){
        decision.textContent="Match is draw";
    }
    else{
        decision.textContent="Game is Going on.....";
    }
}


// function to check if game is completed or not
function completed(array){
    if(array[0]==array[1] && array[0]==array[2]){
        // 1st row condition 
        return true;
    }
    else if(array[3]==array[4] && array[3]==array[5]){
        // 2nd row condition
        return true; 
    }
    else if(array[6]==array[7] && array[7]==array[8]){
        // 3rd row condition 
        return true;
    }
    else if(array[0]==array[3] && array[0]==array[6]){
        // 1st coloumn condition 
        return true;
    }
    else if(array[1]==array[4] && array[1]==array[7]){
        // 2nd coloumn condition 
        return true;
    }
    else if(array[2]==array[5] && array[2]==array[8]){
        // 3rd coloumn condition 
        return true;
    }
    else if(array[0]==array[4] && array[0]==array[8]){
        // 1st diagonal condition 
        return true;
    }
    else if(array[2]==array[4] && array[2]==array[6]){
        // 2nd diagonal condition 
        return true;
    }
    
    else if(count==9){
        return true;
    }
    else{
        return false;
    }
}

// button to refresh 
var newGame = document.getElementById('newGame');

newGame.addEventListener('click', function(){
    if(!completed(array)){
        if(confirm("Do you want to Restart the game?")){
            location.reload();
        }
    }
    else{
        location.reload();
    }
    
});



