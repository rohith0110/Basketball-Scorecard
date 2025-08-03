let time = 5400000; // 45 minutes in milliseconds
let timer = null;
let isRunning = false;

function incrementScore(team, points) {
  if (isRunning) {
    const scoreElement = document.getElementById(team); // Reset box shadow
    Array.from(document.getElementsByClassName("score")).forEach((el) =>
      el.classList.remove("flash")
    );
    scoreElement.textContent =
      (parseInt(scoreElement.textContent, 10) || 0) + points;
    void scoreElement.offsetWidth;
    scoreElement.classList.add("flash");
  } else {
    sendMessage("Start/Resume the timer first!");
  }
}

function decrementScore(team, points) {
  const scoreElement = document.getElementById(team);
  const currentScore = parseInt(scoreElement.textContent, 10) || 0;
  if (currentScore >= points) {
    scoreElement.textContent = currentScore - points;
  }
  if (currentScore < points) {
    scoreElement.textContent = 0; // Prevent negative scores
    sendMessage("Score cannot be negative!");
  }
}

function sendMessage(message) {
  document.getElementById("message").textContent = message;
}

document.getElementById("add1home").addEventListener("click", function () {
  incrementScore("home", 1);
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "1") {
    event.preventDefault(); // Prevent default browser action
    incrementScore("home", 1);
  }
  if (event.ctrlKey && event.key === "2") {
    event.preventDefault(); // Prevent default browser action
    incrementScore("home", 2);
  }
  if (event.ctrlKey && event.key === "3") {
    event.preventDefault(); // Prevent default browser action
    incrementScore("home", 3);
  }
  if (event.altKey && event.key === "1") {
    event.preventDefault(); // Prevent default browser action
    incrementScore("away", 1);
  }
  if (event.altKey && event.key === "2") {
    event.preventDefault(); // Prevent default browser action
    incrementScore("away", 2);
  }
  if (event.altKey && event.key === "3") {
    event.preventDefault(); // Prevent default browser action
    incrementScore("away", 3);
  }
  if (event.ctrlKey && event.key === "-") {
    event.preventDefault(); // Prevent default browser action
    decrementScore("home", 1);
  }
  if (event.altKey && event.key === "-") {
    event.preventDefault(); // Prevent default browser action
    decrementScore("away", 1);
  }
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default form submission
    starttimer();
  }
  if (event.code === "Space") {
    event.preventDefault(); // Prevent default spacebar action
    clearInterval(timer);
    timer = null;
    isRunning = false;
  }
  if (event.code === "KeyR") {
    event.preventDefault(); // Prevent default browser action
    reset();
  }
});

document.getElementById("add2home").addEventListener("click", function () {
  incrementScore("home", 2);
});

document.getElementById("add3home").addEventListener("click", function () {
  incrementScore("home", 3);
});

document.getElementById("add1away").addEventListener("click", function () {
  incrementScore("away", 1);
});

document.getElementById("add2away").addEventListener("click", function () {
  incrementScore("away", 2);
});

document.getElementById("add3away").addEventListener("click", function () {
  incrementScore("away", 3);
});

document.getElementById("start").addEventListener("click", function () {
  starttimer();
});

function starttimer() {
  sendMessage("");
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(function () {
      time -= 100;
      if (time === 2700000) {
        sendMessage("First Half Completed!");
        clearInterval(timer);
        timer = null;
        isRunning = false;
      }
      document.getElementById("timer").textContent =
        Math.floor(time / 60000) +
        ":" +
        Math.floor((time % 60000) / 1000) +
        ":" +
        Math.floor(((time % 60000) % 1000) / 100);
      if (time <= 0) {
        sendMessage("Time's up!");
        clearInterval(timer);
        timer = null;
        isRunning = false;
      }
    }, 100);
  } else {
    sendMessage("Timer is already running!");
  }
}

document.getElementById("pause").addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  isRunning = false;
});

document.getElementById("reset").addEventListener("click", function () {
  reset();
});

function reset() {
  document.getElementById("away").textContent = 0;
  document.getElementById("home").textContent = 0;
  clearInterval(timer);
  timer = null;
  isRunning = false;
  document.getElementById("message").textContent = "";
  time = 5400000;
  document.getElementById("timer").textContent = "90:00:0";
}

(function () {
  const toggleBtn = document.getElementById("hotkey-toggle");
  const content = document.getElementById("hotkey-content");

  if (!toggleBtn || !content) return;

  function openPanel() {
    content.hidden = false;
    toggleBtn.setAttribute("aria-expanded", "true");
  }

  function closePanel() {
    content.hidden = true;
    toggleBtn.setAttribute("aria-expanded", "false");
  }

  toggleBtn.addEventListener("click", () => {
    const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      document.getElementById("hotkey-toggle").style.display = "block";
      closePanel();
    } else {
      openPanel();
      document.getElementById("hotkey-toggle").style.display = "none";
    }
  });
  document.addEventListener("click", (e) => {
    const helper = document.getElementById("hotkey-helper");
    if (!helper) return;
    const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";
    if (isOpen && !helper.contains(e.target)) {
      document.getElementById("hotkey-toggle").style.display = "block";
      closePanel();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "?" || (e.shiftKey && e.key === "/")) {
      e.preventDefault();
      const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        document.getElementById("hotkey-toggle").style.display = "block";
        closePanel();
      } else {
        document.getElementById("hotkey-toggle").style.display = "none/";
        openPanel();
      }
    }
  });
})();
