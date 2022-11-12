// to generate anything random we use Math.random() method;
//to generate combination of numbers and letter, first we have to convert variable to string
//also the parameter of toString() has to be 16 because we need hexadecimal numeral system, which is 0-9 and then goes a-f.
//hex color number contains only six figures, hence we need to use substring method and define indexes as 2 and 8.

//variables

const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

function setColor() {
  bgColor.classList.add("online");
}

async function connectionStatus() {
  try {
    const fetchResult = await fetch(
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Weizmann_1948.jpg?time=" +
        new Date().getTime()
    );
    image.src = "./images/online.png";
    setColor();
    return fetchResult.status >= 200 && fetchResult.status < 300;
  } catch (error) {
    console.error(error);
    statusDisplay.textContent = "OOPS!!! Your Internet connection is down";
    image.src = "./images/offline.jpg";
    bgColor.classList.remove("online");
  }
}

//MONITOR THE CONNECTION

setInterval(async () => {
  const result = await connectionStatus();
  if (result) {
    statusDisplay.textContent = "You are Online, Connection looking good";
    setColor();
  }
}, 5000);

//check connection when page loads

window.addEventListener("load", async (event) => {
  if (connectionStatus()) {
    statusDisplay.textConnect = "Online";
  } else {
    statusDisplay.textContent = "OFFline";
  }
});
