let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let winnerMsg = document.querySelector("#msg");
let content = document.querySelector(".msgContainer");
let bgdrop = document.querySelector("#bgdrop");
let div1 = document.querySelector(".div1");
const winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let draw = 0;
let count = 0; 
let turn = true;

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if (turn) {
            box.innerText="X";
            turn = false;
        }else{
            box.innerText="O"
            turn = true;
        }
        count++;
        box.setAttribute('disabled','true');
        checkWinner();        
    });
});
const checkWinner =()=>{
    for(pattern of winner){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if(count==9){
            draw++
        };
        if (val1!="" && val2!="" && val3!=""){
            if (val1 == val2 && val1 == val3) { 
                show(val1);
            }else if(count==9 && draw==8){
                winnerMsg.innerText="Match draw";
            };
        };
    };
};
const show=(winner)=>{
    winnerMsg.innerText=`Congratulations, Winner is ${winner}`;
    content.classList.remove('hide');
    div1.innerText=`Congratulations, Winner is ${winner}`;
    bgdrop.style.visibility="visible";
    buttonDisable();
    setTimeout(() => {
        div1.innerText="";
        bgdrop.style.visibility="hidden";
    }, 3000);
};
const buttonDisable = ()=>{
    for(box of boxes){
        box.disabled=true;
    };
}
const resetGame = ()=>{
    turn = true;
    count=0;
    draw=0;
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
resetBtn.addEventListener("click",()=>{
    resetGame();
    winnerMsg.innerText="Start with X";
    content.classList.add("hide");
});