const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  const hamburger_icon = document.querySelector(".hamburger_icon");
  const nav_items = document.querySelector(".nav_items");

  if (hamburger_icon.classList.contains("fa-bars")) {
    hamburger_icon.classList.remove("fa-bars");
    hamburger_icon.classList.add("fa-xmark");
  } else {
    hamburger_icon.classList.add("fa-bars");
    hamburger_icon.classList.remove("fa-xmark");
  }
  if (window.innerWidth <= 768) {
    if (hamburger_icon.classList.contains("fa-xmark")) {
      nav_items.style.display = "block";
      // Add click event listeners to all nav items
      const navItems = document.querySelectorAll('.nav_items li');
      navItems.forEach(item => {
        item.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
            nav_items.style.display = 'none';
            hamburger_icon.classList.remove('fa-xmark');
            hamburger_icon.classList.add('fa-bars');
          }
        });
      });
    } else {
      nav_items.style.display = "none";
    }
  } else {
    nav_items.style.display = "flex";
  }
});
