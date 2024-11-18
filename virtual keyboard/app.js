document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector("input[type='text']");
    const keys = document.querySelectorAll(".key");
  
    // Track Caps Lock state
    let isCapsLockActive = false;
  
    keys.forEach((key) => {
      key.addEventListener("click", () => {
        const keyContent = key.textContent.trim();
  
        if (key.classList.contains("back-space-key")) {
          // Handle Backspace
          inputField.value = inputField.value.slice(0, -1);
        } else if (key.classList.contains("tab-key")) {
          // Handle Tab
          inputField.value += "\t";
        } else if (key.classList.contains("caps-lock-key")) {
          // Toggle Caps Lock
          isCapsLockActive = !isCapsLockActive;
          key.classList.toggle("active", isCapsLockActive);
        } else if (key.classList.contains("enter-key")) {
          // Handle Enter
          inputField.value += "\n";
        } else if (key.classList.contains("shift-key")) {
          // Handle Shift (you can implement additional shift behavior here)
        } else if (key.classList.contains("space-key")) {
          // Handle Space
          inputField.value += " ";
        } else {
          // Handle Regular Keys
          const isUpperCase = isCapsLockActive || keyContent === keyContent.toUpperCase();
          inputField.value += isUpperCase ? keyContent.toUpperCase() : keyContent.toLowerCase();
        }
      });
    });
  });
  