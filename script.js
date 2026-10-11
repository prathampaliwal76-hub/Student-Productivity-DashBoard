// Task Feature
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.innerText = task;

    // Mark complete
    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.style.marginLeft = "10px";

    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

// TIMER FEATURE (UPGRADED)
let time = 1500;
let interval = null;

// Start
function startTimer() {
    if (interval !== null) return;

    interval = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        document.getElementById("timer").innerText =
            `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        time--;

        if (time < 0) {
            clearInterval(interval);
            interval = null;
            alert("Time's up!");
        }
    }, 1000);
}

// Stop
function stopTimer() {
    clearInterval(interval);
    interval = null;
}

// Reset
function resetTimer() {
    clearInterval(interval);
    interval = null;
    time = 1500;
    document.getElementById("timer").innerText = "25:00";
}