let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn=document.querySelector(".new");
let msg=document.querySelector(".msg");
let msgContainer=document.querySelector(".winner");
let turnO = true;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });

});
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&& pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log(`Winner of this game is ${pos1Val}`);
                boxes.forEach(box=> box.disabled=true);
                showtime(pos1Val);
                
            }
        }
    }    
}
const showtime=(winner)=>{
    msg.innerText=(`Champion ${winner} has won.`);
    msgContainer.classList.remove("hide");
}
