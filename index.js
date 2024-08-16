let boxes = document.querySelectorAll(".box")
let resetbin = document.querySelector("#reset")
let newgame = document.querySelector("#newgame")
let msgContainer = document.querySelector(".msgContainer")
let msg = document.querySelector("#msg")

let click = 0;
let turno = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        click = click + 1;
        if(turno === true){
            turno = false;
            box.innerText = ("X");
        }

        else{
            turno = true;
            box.innerText = ("O");
        }
        box.disabled = true

        checkwinner();
        
    });
});

const checkwinner = () =>{

    for (let pattern of winPatterns ){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
            }

            else if(pos1 !== pos2 && pos2 !== pos3  && click===9){
                showwinner("Draw")
            }
        }
    }
};

const showwinner = (winner)=>{
    if(click === 9 && winner === "Draw"){
        msg.innerText = "Match is  Draw"
        msgContainer.classList.remove("hide")
        disabledBoxes()
    }

    else{
        msg.innerText = "winner is " +   winner;
        msgContainer.classList.remove("hide");
        disabledBoxes()
    }
}

const reset = () =>{
    click = 0;
    console.log(click);
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

const disabledBoxes = ()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}



resetbin.addEventListener("click",reset);
newgame.addEventListener("click",reset);


























