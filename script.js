const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener("click", palindrome);

function palindrome() {
  const text = input.value.trim();
  if (text === "") {
    alert("Please input a value");
    return;
  }
  if (isPalindrome(text)) {
    result.innerText = `"${text}" is a palindrome.`;
  } else result.innerText = `"${text}" is not a palindrome.`;
}

function isPalindrome(text) {
  const lower = text.toLowerCase();
  const cleaned = lower.replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
}
