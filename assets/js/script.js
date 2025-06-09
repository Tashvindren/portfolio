'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });

// Function to handle showing the modal
const eyeIcons = document.querySelectorAll('[data-modal-id]');

eyeIcons.forEach((icon) => {
  const modalId = icon.getAttribute('data-modal-id');
  const modal = document.getElementById(modalId);
  const closeBtn = modal.querySelector('.popup-close');
  
  // Show the modal when the eye icon is clicked
  icon.onclick = function() {
    modal.style.display = "block";
  };

  // Close the modal when the close button is clicked
  closeBtn.onclick = function() {
    modal.style.display = "none";
  };

  // Close modal if clicked outside of content area
  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});

// Download buttons functionality
const downloadButton1 = document.getElementById('download-1');
const downloadButton2 = document.getElementById('download-2');

// File paths (Adjust to your actual file paths in the assets folder)
const file1Path = './assets/download/Poster-KidsTravel+.pdf'; // Example PDF file
const file2Path = './assets/download/sample.apk'; // Example APK file

// Download buttons functionality
const downloadButton3 = document.getElementById('download-3');
const downloadButton4 = document.getElementById('download-4');

// File paths (Adjust to your actual file paths in the assets folder)
const file3Path = './assets/download/sample.pdf'; // Example PDF file
const file4Path = './assets/download/StickyNotes.apk'; // Example APK file

// Set up download links
downloadButton1.onclick = function() {
  const link1 = document.createElement('a');
  link1.href = file1Path;
  link1.download = 'sample.pdf';  // Name the downloaded file
  link1.click();
};

downloadButton2.onclick = function() {
  const link2 = document.createElement('a');
  link2.href = file2Path;
  link2.download = 'sample.apk';  // Name the downloaded file
  link2.click();
};
// Set up download links
downloadButton3.onclick = function() {
  const link1 = document.createElement('a');
  link1.href = file3Path;
  link1.download = 'sample.pdf';  // Name the downloaded file
  link1.click();
};

downloadButton4.onclick = function() {
  const link2 = document.createElement('a');
  link2.href = file4Path;
  link2.download = 'sample.apk';  // Name the downloaded file
  link2.click();
};
}