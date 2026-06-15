function showWether(wether) {
  if (wether == "rain") {
    console.log("wvims da qolga waatrie");
  } else if (wether == "sun") {
    console.log("zan cxela dzliaan da mze qoops");
  } else if (wether == "cloud") {
    console.log("dila ki ara gamia imdeni grubelia caze");
  }
}

function getWether(callback) {
  setTimeout(() => {
    callback("cloud");
  }, 5000);
}

getWether(showWether);
