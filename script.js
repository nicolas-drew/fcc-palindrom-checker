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
  if (text.length === 1) {
    return false;
  }

  const normalized = text.normalize("NFD");
  const replaced = normalized.replace(/[\u0300-\u036f]/g, "");
  const lower = replaced.toLowerCase();
  const cleaned = lower.replace(/[^a-z0-9]/g, "");
  if (cleaned === "") {
    return false;
  }
  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
}

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    palindrome();
  }
});
