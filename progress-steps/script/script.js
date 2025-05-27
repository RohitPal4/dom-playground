const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".line");

let currentStep = 1;

function updateButtons() {
  // Disable prev button if we're at the first step
  prevBtn.disabled = currentStep === 1;
  
  // Disable next button if we're at the last step
  nextBtn.disabled = currentStep === circles.length;
  
  // Optional: Change button styles when disabled
  prevBtn.style.backgroundColor = prevBtn.disabled ? "#cccccc" : "aqua";
  nextBtn.style.backgroundColor = nextBtn.disabled ? "#cccccc" : "aqua";
}

nextBtn.addEventListener("click", () => {
  if (currentStep < circles.length) {
    circles[currentStep].classList.add("active");
    if (currentStep - 1 >= 0) {
      lines[currentStep - 1].classList.add("active");
    }
    currentStep++;
    updateButtons();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    circles[currentStep].classList.remove("active");
    if (currentStep - 1 >= 0) {
      lines[currentStep - 1].classList.remove("active");
    }
    updateButtons();
  }
});

// Initialize button states
updateButtons();