<div align="center">
  <img width="90" height="60" src="logo.png" alt="logo">
  <h2 align="center">Elegance eCommerce</h2>
  
  "Revolutionize your online shopping experience with our *Elegance* e-Commerce platform, delivering seamless transactions and unparalleled customer satisfaction."
  

</div>

## Table of Content
- [Header](#header)
- [Mobile Menu](#mobile-menu)
- [Sorter](#sorter)
- [Tabbed](#tabbed)
- [Slider](#slider)
- [Carousel](#carousel)
- [Slider](#slider-1)
- [Filter](#filter)

## Header

- The header section of the code selects elements with the attribute `trigger-button` and `close-button` as well as the element with the attribute `data-overlay`.
- It adds event listeners to the trigger buttons to open and close the target element and overlay.
- It also adds an event listener to the close button within the target element and the overlay to close the target element and overlay when clicked.

```javascript
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
```

## Mobile Menu

- The code selects all elements with the class `child-trigger` and adds an event listener to each.
- When a `child-trigger` element is clicked, it prevents the default action and toggles the active class on the closest parent element with the class `has-child`.

```javascript
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
```

## Sorter

- The code selects the `.sort-list` element and adds event listeners to the option trigger and each list item.
- Clicking the option trigger toggles the visibility of the associated list.
- Clicking a list item adds the `active` class to that item and updates the text content of the option trigger with the selected item's text.

```javascript
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
```

## Tabbed

- The code selects all elements with the class ` tabbed-trigger` and all `tabbed` div elements.
- It adds an event listener to each `tabbed-trigger` element.
- When a `tabbed-trigger` element is clicked, it gets the associated target element and adds the `active` class to it.
- It also adds the `active` class to the parent element of the clicked `tabbed-trigger` and removes the `active` class from other `tabbed-trigger` elements and `tabbed` div elements.

```javascript
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
```

## Slider

- The code initializes a Swiper instance with the class `.sliderbox`.
- It sets options for the loop, fade effect, and auto height of the slider.
- It also enables pagination for the slider.

```javascript
const swiper = new Swiper(".sliderbox", {
  loop: true,
  effect: "fade",
  autoHeight: "true",

  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
});
```

## Carousel

- The code initializes a Swiper instance with the class `.carouselbox`.
- It sets options for the space between slides, the number of slides per view, centered slides, and navigation buttons.
- It also defines breakpoints for different screen sizes.

```javascript
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
```

## Slider

- The code initializes two Swiper instances: `thumbImage and mainImage`.
- `ThumbImage` handles the thumbnail images, while `mainImage` handles the main product image.
- It sets options for loop, vertical direction, space between slides, auto height, and pagination.
- It also links `thumbImage` as the thumbs for `mainImage`.

```javascript
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
```

## Filter

- The code selects all filter items and filter buttons.
- It adds a click event listener to each filter button.
- When a filter button is clicked, it shows the corresponding filter content by adding the `active-btn` class and setting the display property to block.
- It also hides other filter items by setting their display property to none.
- The `resetActiveBtn` function removes the `activeBtn` class from all filter buttons.

```javascript
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
```
