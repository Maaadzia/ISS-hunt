function updateTime() {
    var currentDate = new Date().toLocaleString();
    var timeText = document.querySelector("#TimeElement");
    timeText.innerHTML = currentDate;
    }
setInterval(updateTime, 1000);