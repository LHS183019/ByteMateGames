/* ByteMate Studio - single-page scroll + active nav highlight */
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
})();
