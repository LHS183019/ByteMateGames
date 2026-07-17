/* ByteMate Studio - single-page scroll + active nav highlight + game carousel */
(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ── Scroll-spy: highlight nav link as sections enter viewport ──
  var sections = Array.prototype.slice.call(
    document.querySelectorAll("section[id]")
  );
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav-link[href^='#']")
  );

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            var active = link.getAttribute("href") === "#" + id;
            link.classList.toggle("active", active);
          });
        }
      });
    }, {
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0
    });

    sections.forEach(function (sec) { observer.observe(sec); });
  } else {
    if (navLinks.length) navLinks[0].classList.add("active");
  }

  // ── Affix detection for navbar (CSS handles brand transition) ──
  var navbar = document.getElementById("navbar");
  var banner = document.getElementById("banner");

  if ("IntersectionObserver" in window && navbar && banner) {
    var affixObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        navbar.classList.toggle("affix", !entry.isIntersecting);
      });
    }, {
      rootMargin: "-150px 0px 0px 0px",
      threshold: 0
    });

    affixObserver.observe(banner);
  }

  // ── Game Carousel ──
  function initCarousel() {
    var carousel = document.querySelector(".game-carousel");
    if (!carousel) return;

    var track = carousel.querySelector(".carousel-track");
    var slides = track.querySelectorAll(".game-cover");
    var dotsContainer = carousel.querySelector(".carousel-dots");
    var prevBtn = carousel.querySelector(".carousel-prev");
    var nextBtn = carousel.querySelector(".carousel-next");

    // If only one image, hide controls
    if (slides.length <= 1) {
      if (prevBtn) prevBtn.style.display = "none";
      if (nextBtn) nextBtn.style.display = "none";
      if (dotsContainer) dotsContainer.style.display = "none";
      return;
    }

    var currentIndex = 0;
    var totalSlides = slides.length;

    // Create dots
    dotsContainer.innerHTML = "";
    for (var i = 0; i < totalSlides; i++) {
      var dot = document.createElement("span");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dot.setAttribute("data-index", i);
      dotsContainer.appendChild(dot);
    }
    var dots = dotsContainer.querySelectorAll(".dot");

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;
      track.style.transform = "translateX(-" + (currentIndex * 100) + "%)";
      dots.forEach(function (d, i) {
        d.classList.toggle("active", i === currentIndex);
      });
    }

    prevBtn.addEventListener("click", function () {
      goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener("click", function () {
      goToSlide(currentIndex + 1);
    });

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        goToSlide(parseInt(dot.getAttribute("data-index"), 10));
      });
    });

    // Auto-play (pause on hover)
    var autoPlayInterval;
    function startAutoPlay() {
      autoPlayInterval = setInterval(function () {
        goToSlide(currentIndex + 1);
      }, 4000);
    }
    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }

    startAutoPlay();
    carousel.addEventListener("mouseenter", stopAutoPlay);
    carousel.addEventListener("mouseleave", startAutoPlay);

    // Touch/swipe support
    var touchStartX = 0;
    var touchEndX = 0;

    track.addEventListener("touchstart", function (e) {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    }, { passive: true });

    track.addEventListener("touchend", function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToSlide(currentIndex + 1);
        } else {
          goToSlide(currentIndex - 1);
        }
      }
      startAutoPlay();
    }, { passive: true });
  }

  // Initialize carousel when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCarousel);
  } else {
    initCarousel();
  }
})();
