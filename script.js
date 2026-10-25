let totalSeconds = 25 * 60;
let timerInterval = null;
let running = false;


// Timer display
function updateTimer() {

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}


// START BUTTON
function startTimer() {

    if (running) {
        return;
    }

    running = true;

    document.getElementById("status").innerText = "● Studying";

    timerInterval = setInterval(function () {

        if (totalSeconds > 0) {

            totalSeconds--;

            updateTimer();

        } else {

            clearInterval(timerInterval);

            running = false;

            document.getElementById("status").innerText =
                "● Completed";

            alert("🎉 Study session completed!");

        }

    }, 1000);
}


// PAUSE BUTTON
function pauseTimer() {

    clearInterval(timerInterval);

    running = false;

    document.getElementById("status").innerText =
        "● Paused";
}


// RESET BUTTON
function resetTimer() {

    clearInterval(timerInterval);

    running = false;

    totalSeconds = 25 * 60;

    updateTimer();

    document.getElementById("status").innerText =
        "● Ready";
}


// TASKS
function updateTasks() {

    let tasks = document.querySelectorAll(".task input");

    let completed = 0;

    tasks.forEach(function(task) {

        if (task.checked) {
            completed++;
        }

    });

    document.getElementById("taskCount").innerText =
        completed + "/5";

    document.getElementById("completedText").innerText =
        completed + "/5";

    let percentage =
        (completed / tasks.length) * 100;

    document.getElementById("taskProgress").style.width =
        percentage + "%";
}


// Start with 25:00
updateTimer();