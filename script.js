const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener("click", palindrome);

function palindrome(button) {
  const text = input.value.trim();
  if (text === "") {
    alert("Please input a value");
    return;
  }
}

function isPalindrome() {}
