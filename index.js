const numberTag = document.getElementById("number");
const pTag = document.getElementById("boom");

let number = 0;

const onIncrement = () => {
  number = number + 3;
  numberTag.textContent = number;
  if (number > 35) {
    pTag.textContent = "BOOOM! You just blew yourself";
  } else {
    pTag.textContent = undefined;
  }
};
const onDecrement = () => {
  number = number - 3;
  numberTag.textContent = number;
  if (number < -35) {
    pTag.textContent = "BOOOM! You just shrinked yourself";
  } else {
    pTag.textContent = undefined;
  }
};
