/// Swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  // pagination: {
  // el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Palindrome Checker

// Set the DOM

const palindromeCheckBtn = document.getElementById("check-btn");
const palindromeUserInput = document.getElementById("text-input");

// Functions

const checkPalindrome = (originalUserInput) => {
  const UserInput = originalUserInput
    .replace(/[^a-zA-Z0-9]/g, "") // remove all non-alphanumeric characters
    .toLowerCase(); // turn everything into the same case (lower)
  if (UserInput === "") {
    window.alert("Please input a value");
  } else if (UserInput === UserInput.split("").reverse().join("")) {
    window.alert("Palindrome"); // teste
    return console.log(UserInput); // teste
  } else {
    window.alert("Not Palindrome"); // teste
    return console.log(UserInput); // teste
  }
};

// Event Listeners

palindromeCheckBtn.addEventListener("click", () => {
  checkPalindrome(palindromeUserInput.value);
  palindromeUserInput.value = ""; // clear the input text in the html
});

palindromeUserInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPalindrome(palindromeUserInput.value);
    palindromeUserInput.value = "";
  }
});

const formattedDate = `abc`;

console.log(formattedDate.split("").reverse().join(""));
