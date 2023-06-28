function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function fadeInElement(element) {
    element.style.opacity = "1";
  }
  
  document.addEventListener("scroll", function() {
    var fadeElements = document.querySelectorAll(".cards");
    for (var i = 0; i < fadeElements.length; i++) {
      if (isElementInViewport(fadeElements[i])) {
        fadeInElement(fadeElements[i]);
      }
    }
  });
  document.addEventListener("scroll", function() {
    var fadeElements = document.querySelectorAll(".skill");
    for (var i = 0; i < fadeElements.length; i++) {
      if (isElementInViewport(fadeElements[i])) {
        fadeInElement(fadeElements[i]);
      }
    }
  });
  document.addEventListener("scroll", function() {
    var fadeElements = document.querySelectorAll(".project-cards");
    for (var i = 0; i < fadeElements.length; i++) {
      if (isElementInViewport(fadeElements[i])) {
        fadeInElement(fadeElements[i]);
      }
    }
  });
  document.addEventListener("scroll", function() {
    var fadeElements = document.querySelectorAll(".seventh-page");
    for (var i = 0; i < fadeElements.length; i++) {
      if (isElementInViewport(fadeElements[i])) {
        fadeInElement(fadeElements[i]);
      }
    }
  });
  document.addEventListener("scroll", function() {
    var fadeElements = document.querySelectorAll(".cardsR");
    for (var i = 0; i < fadeElements.length; i++) {
      if (isElementInViewport(fadeElements[i])) {
        fadeInElement(fadeElements[i]);
      }
    }
  });
  