let boxs = document.body.querySelectorAll(".box")
let reserBtn = document.body.querySelector("#reset")
let newGameBtn = document.body.querySelector("#new-btn");
let msgContainer = document.body.querySelector(".msgContainer");
let msg = document.body.querySelector("#msg");
let hideMain = document.body.querySelector("#hide-main")

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
     turnO = true;
     enabledBox();
     msgContainer.classList.add("hide");
    hideMain.classList.remove("hide-main");

}

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        // box.innerText = "O"
        if(turnO == true){
            box.innerText = "O"
            turnO = false;
        }
        else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});


const disabledBox = () => {
    for(let box of boxs){
        box.disabled = true;
    }
}

const enabledBox = () => {
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    hideMain.classList.add("hide-main");
    disabledBox();
}

const checkwinner = () => {
    for(let pattern of winPatterns){
    //    console.log(pattern[0], pattern[1], pattern[2]);
       
         let posVAl1 = boxs[pattern[0]].innerText;
         let posVAl2 = boxs[pattern[1]].innerText; 
         let posVAl3 = boxs[pattern[2]].innerText;

         if (posVAl1 != "" && posVAl1 != "" && posVAl3 != ""){
            if (posVAl1 === posVAl2 && posVAl2 === posVAl3){
                // console.log("winner", posVAl1);
                showWinner(posVAl1)
            }
         }
    }
}

newGameBtn.addEventListener("click", resetGame);
reserBtn.addEventListener("click", resetGame);