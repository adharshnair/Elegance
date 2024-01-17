/* ---------------------- HEADER ----------------------*/
const triggerOpen = document.querySelectorAll("[trigger-button]");
const triggerClose = document.querySelectorAll("[close-button]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < triggerOpen.length; i++) {
  let currentId = triggerOpen[i].dataset.target,
    tragetEl = document.querySelector(`#${currentId}`);
  const openData = function () {
    tragetEl.classList.remove("active");
    overlay.classList.remove("active");
  };
  triggerOpen[i].addEventListener("click", function () {
    tragetEl.classList.add("active");
    overlay.classList.add("active");
  });
  tragetEl.querySelector("[close-button]").addEventListener("click", openData);
  overlay.addEventListener("click", openData);
}

/**
 * Mobile Menu (SUB-MENU)
 */
const submenu = document.querySelectorAll(`.child-trigger`);
submenu.forEach((menu) =>
  menu.addEventListener("click", function (e) {
    e.preventDefault();
    submenu.forEach((item) =>
      item != this
        ? item.closest(".has-child").classList.remove("active")
        : null
    );
    if (this.closest(".has-child").classList != "active") {
      this.closest(".has-child").classList.toggle("active");
    }
  })
);

/* ---------------------- SORTER ----------------------*/
const sorter = document.querySelector(".sort-list");
if (sorter) {
  const sortLi = sorter.querySelectorAll("li");
  sorter.querySelector(".opt-trigger").addEventListener("click", function () {
    sorter.querySelector("ul").classList.toggle("show");
  });

  sortLi.forEach((item) =>
    item.addEventListener("click", function () {
      sortLi.forEach((li) =>
        li != this ? li.classList.remove("active") : null
      );

      this.classList.add("active");
      sorter.querySelector(".opt-trigger span.value").textContent =
        this.textContent;
      sorter.querySelector("ul").classList.toggle("show");
    })
  );
}
/*============ Tabbed ============*/
const trigger = document.querySelectorAll(".tabbed-trigger"),
  content = document.querySelectorAll(".tabbed > div");
trigger.forEach((btn) => {
  btn.addEventListener("click", function () {
    let dataTarget = this.dataset.id,
      body = document.querySelector(`#${dataTarget}`);

    trigger.forEach((b) => b.parentNode.classList.remove("active"));
    content.forEach((s) => s.classList.remove("active"));
    this.parentNode.classList.add("active");
    body.classList.add("active");
  });
});

/* ---------------------- SLIDER ----------------------*/
const swiper = new Swiper(".sliderbox", {
  loop: true,
  effect: "fade",
  autoHeight: "true",

  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
});

/* ---------------------- CAROUSEL ----------------------*/
const carousel = new Swiper(".carouselbox", {
  spaceBetween: 30,
  slidesPerView: "auto",
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    401: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      centeredSlides: false,
    },
    640: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      centeredSlides: false,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      centeredSlides: false,
    },
  },
});

/* ---------------------- SLIDER FOR PRODUCT PAGE (product-image) ----------------------*/
const thumbImage = new Swiper(".thumbnail-image", {
  loop: true,
  direction: "vertical",
  spaceBetween: 15,
  slidesPerGroup: 1,
  freeMode: true,
  watchSlideProgress: true,
});
const mainImage = new Swiper(".main-image", {
  loop: true,
  autoHeight: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: thumbImage,
  },
});

/* ---------------------- FILTER FOR PRODUCTS ----------------------*/
const allFilterItems = document.querySelectorAll(".filter-item");
const allFilterBtns = document.querySelectorAll(".filter-btn");

allFilterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showFilterContent(btn);
  });
});

function showFilterContent(btn) {
  const filterValue = btn.id;

  allFilterItems.forEach((item) => {
    if (item.classList.contains(filterValue)) {
      resetActiveBtn();
      btn.classList.add("active-btn");
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function resetActiveBtn() {
  allFilterBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}

/* ---------------------- MOBILE NAV (when scrolled) ----------------------*/
// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Get references to the navbar and bottom bar elements
const navbar = document.getElementById("header");
const bottomBar = document.getElementById("data-mobile-nav");

// Function to show or hide the bottom bar based on navbar visibility
function toggleBottomBarVisibility() {
  if (isInViewport(navbar)) {
    // Navbar is in viewport, hide the bottom bar
    bottomBar.style.bottom = "-60px";
  } else {
    // Navbar is not in viewport, show the bottom bar
    bottomBar.style.bottom = "0";
  }
}

// Attach the function to the window's scroll event
window.addEventListener("scroll", toggleBottomBarVisibility);

// Initial check on page load
toggleBottomBarVisibility();
