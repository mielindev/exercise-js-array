//Code here
var originArray = [];
function submit() {
  var valueArr = document.querySelector("#number").value * 1;
  originArray.push(valueArr);
  document.querySelector(".result").innerHTML = `Mảng có: ${originArray}`;
  document.querySelector("#number").value = "";
}
function sumYangNum() {
  var arrLength = originArray.length;
  var sum = 0;
  for (var index = 0; index < arrLength; index++) {
    if (originArray[index] > 0) {
      sum += originArray[index];
    }
  }
  document.querySelector(
    "#sumYangNum"
  ).innerHTML = `Tổng các số dương bằng: ${sum}`;
}
function countYangNum() {
  var arrLength = originArray.length;
  var count = 0;
  for (var index = 0; index < arrLength; index++) {
    if (originArray[index] > 0) {
      count++;
    }
  }
  document.querySelector(
    "#countYangNum"
  ).innerHTML = `Tổng các số dương bằng: ${count}`;
}
function minArr() {
  var arrLength = originArray.length;
  var minValue = originArray[0];
  for (var index = 1; index < arrLength; index++) {
    if (originArray[index] < minValue) {
      minValue = originArray[index];
    }
  }
  document.querySelector(
    "#minArr"
  ).innerHTML = `Số nhỏ nhất trong mảng: ${minValue}`;
}
function minYangArr() {
  var arrLength = originArray.length;
  var newArr = [];
  for (var index = 0; index < arrLength; index++) {
    if (originArray[index] > 0) {
      newArr.push(originArray[index]);
    }
  }
  var minYangValue = newArr[0];
  for (var index = 1; index < newArr.length; index++) {
    if (newArr[index] < minYangValue) {
      minYangValue = newArr[index];
    }
  }
  document.querySelector(
    "#minYangArr"
  ).innerHTML = `Số nhỏ nhất trong mảng: ${minYangValue}`;
}
function lastEvenNum() {
  var arrLength = originArray.length;
  var lastEvenNum = -1;
  for (var index = 0; index < arrLength; index++) {
    if (originArray[index] % 2 == 0) {
      lastEvenNum = originArray[index];
    }
  }
  document.querySelector(
    "#lastEvenNum"
  ).innerHTML = `Số nhỏ nhất trong mảng: ${lastEvenNum}`;
}
function swapLocation() {
  var firstLocation = document.querySelector("#firstLocation").value * 1;
  var secondLocation = document.querySelector("#secondLocation").value * 1;
  var tempValue = originArray[firstLocation - 1];
  originArray[firstLocation - 1] = originArray[secondLocation - 1];
  originArray[secondLocation - 1] = tempValue;
  document.querySelector(
    "#swapLocation"
  ).innerHTML = `Mảng sau khi đổi vị trí: ${originArray}`;
}
