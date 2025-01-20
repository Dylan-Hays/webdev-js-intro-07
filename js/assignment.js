"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

// Function to return the remainder of two numbers
function returnTheRemainder(num1, num2) {
  return num1 % num2;
}

// Function to check if a number is even
function checkIfEven(num) {
  return num % 2 === 0;
}

// Function to get the fourth element of lostNumbers array
function getTheFourthElement(arr) {
  return arr[3]; // Index 3 corresponds to the fourth element
}

// Function to render the output from pressing the button
function renderAnswers() {
  remainderElement.textContent = returnTheRemainder(5, 4); // Outcome: 1
  checkIfEvenElement.textContent = checkIfEven(47); // Outcome: false
  lostNumbersElement.textContent = getTheFourthElement(lostNumbers); // Outcome: 16
}

// Add event listener to the submission button
submissionBtn.addEventListener("click", renderAnswers);
