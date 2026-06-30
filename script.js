function updateTime() {
    var currentDate = new Date().toLocaleString();
    var timeText = document.querySelector("#TimeElement");
    timeText.innerHTML = currentDate;
    }
setInterval(updateTime, 1000);



//openable and closeable poland
//var polandScreen = document.querySelector("#poland")

//function closeWindow(element) {
//  element.style.display = "none"
//}
//function openWindow(element) {
//  element.style.display = "flex"
//}

//var polandClose = document.querySelector("#polandclose")

//var polandOpen = document.querySelector("#polandopen")

//polandClose.addEventListener("click", function() {
//  closeWindow(poland);
//});

//polandOpen.addEventListener("click", function() {
//  openWindow(poland);
//});

const countrySelect = document.getElementById("#countrySelect");
const doneButton = document.getElementById("#doneButton");

doneButton.addEventListener("click", function() {
    const selectedCountry = countrySelect.value;


    document.getElementById("polandwindow").style.display = "none";
    document.getElementById("ukwindow").style.display = "none";
    document.getElementById("germanywindow").style.display = "none";


if (selectedCountry === "poland") {
        document.getElementById("polandwindow").style.display = "block";
    } else if (selectedCountry === "uk") {
        document.getElementById("ukwindow").style.display = "block";
    } else if (selectedCountry === "germany") {
        document.getElementById("germanywindow").style.display = "block";
    }

  });
