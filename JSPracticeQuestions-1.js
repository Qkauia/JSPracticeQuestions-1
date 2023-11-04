// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// function sumOfSmallestValues(arr) {
//   //將陣列的順序由小至大改變
//   arr.sort((a, b) => a - b);
//   //取出陣列裡前2個最小值，進行相加
//   return arr[0] + arr[1];
// }

// const list1 = [19, 5, 42, 2, 77];
// const list2 = [23, 15, 59, 4, 17];

// console.log(sumOfSmallestValues(list1)); // 印出 7
// console.log(sumOfSmallestValues(list2)); // 印出 19

const answerBtn = document.querySelector(".show-answer");
const answer = document.querySelector(".answer");

answer.style.display = "none";

answerBtn.addEventListener("click", () => {
  if (answer.style.display == "none") {
    answer.style.display = "block";
    answerBtn.innerText = "隱藏";
  } else {
    answer.style.display = "none";
    answerBtn.innerText = "解答";
  }
});
