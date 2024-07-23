let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn"); // Corrected selector to ID
let newgameBtn = document.querySelector("#Newbtn"); // Corrected selector to ID
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //player x, player o
const winningP = [
    [0, 1, 2],  // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],  // columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],  // diagonals
    [2, 4, 6]
];

const ResetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0 === true) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        
        box.disabled = true;
        checkWinner();
    });
});

const DisabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `CONGRATULATIONS 🥳 , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    DisabledBoxes();
};

const checkWinner = () => {
    for (let pattern of winningP) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newgameBtn.addEventListener("click", ResetGame);
resetbtn.addEventListener("click", ResetGame);
