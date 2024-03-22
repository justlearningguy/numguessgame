const num_input = document.getElementById("num_input");
const info = document.getElementById("info");
const submit = document.getElementById("submit");
const alert = document.getElementById("alert");
const min = 1;
const max = 100;
let player_num;
let attempts = 0;
info.textContent = `Guess the number between ${min} and ${max}`;
let comp_num = Math.floor(Math.random() * (max-min+1)) + min;
submit.onclick = function() {
    if(isNaN(Number(num_input.value))) {
        alert.textContent = "Please enter the valid number!";
        info.textContent = "";
    }
    else {
        alert.textContent = "";
        attempts++;
        player_num = Number(num_input.value);
        if(player_num > comp_num) {
            info.textContent = "Too high!Try again!";
        }
        else if(player_num < comp_num) {
            info.textContent = "Too low!Try again!";
        }
        else{
            info.textContent = `You gussed the number!It was ${comp_num} and it took you ${attempts} attempts!Try to guess new number.`;
            comp_num = Math.floor(Math.random() * (max-min+1)) + min;
        }
}
}