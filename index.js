//Code here
var originArray = [];
var realNumArr = [];
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

function sortUp() {
  var newArr = originArray;
  var newArrLength = newArr.length;
  for (var i = 0; i < newArrLength; i++) {
    var temporary = null;
    for (var j = i + 1; j < newArrLength; j++) {
      if (newArr[i] > newArr[j]) {
        temporary = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temporary;
      }
    }
  }
  document.querySelector("#sortUp").innerHTML = `Mảng đã sắp xếp: ${newArr}`;
}
function isPrime(n) {
  let prime = true;
  if (n < 2) return (prime = false);
  let i = 2;
  while (i < n) {
    if (n % i == 0) {
      prime = false;
      break;
    }
    i++;
  }
  return prime;
}

function findPrime() {
  for (var index = 0; index < originArray.length; index++) {
    console.log(isPrime(originArray[index]));
    if (isPrime(originArray[index]) == true) {
      document.querySelector("#findPrime").innerHTML = `${originArray[index]}`;
      break;
    } else {
      document.querySelector("#findPrime").innerHTML = `Không có số nguyên tố`;
    }
  }
}

function addRealNum() {
  var valueArr = document.querySelector("#realNumber").value * 1;
  realNumArr.push(valueArr);
  document.querySelector("#realNum").innerHTML = `Mảng có: ${realNumArr}`;
  document.querySelector("#realNumber").value = "";
}

function countRealNum() {
  var count = 0;
  for (var index = 0; index < realNumArr.length; index++) {
    if (Number.isInteger(realNumArr[index])) {
      count++;
    }
  }
  document.querySelector("#countRealNum").innerHTML = `${count}`;
}
function comparePosNega() {
  var countPos = 0;
  var countNega = 0;
  for (var index = 0; index < originArray.length; index++) {
    if (originArray[index] > 0) {
      countPos++;
    } else {
      countNega++;
    }
  }
  if (countPos == countNega) {
    document.querySelector("#comparePosNega").innerHTML = `Số dương = Số âm`;
  } else if (countPos > countNega) {
    document.querySelector("#comparePosNega").innerHTML = `Số dương > Số âm`;
  } else {
    document.querySelector("#comparePosNega").innerHTML = `Số dương < Số âm`;
  }
}
