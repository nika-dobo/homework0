function step1(callback) {
  setTimeout(() => {
    const learnGoa = "yes";
    callback(learnGoa);//callback(learnGoa) === step2(answer)
  }, 2000);
}

function step2(answer) {
  console.log(`i start learn goa. answer: ${answer}`);
}

step1(step2)
console.log("call tokunkula");

//learnGoa => callback => answer