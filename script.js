function updateTime() {
    var currentDate = new Date().toLocaleString();
    var timeText = document.querySelector("#TimeElement");
    timeText.innerHTML = currentDate;
    }
setInterval(updateTime, 1000);



//openable and closeable poland
var polandScreen = document.querySelector("#poland")

function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "flex"
}

var polandClose = document.querySelector("#polandclose")

var polandOpen = document.querySelector("#polandopen")

polandClose.addEventListener("click", function() {
  closeWindow(poland);
});

polandOpen.addEventListener("click", function() {
  openWindow(poland);
});
