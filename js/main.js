/* =========================================================
   RECIPE SECRETS RESTAURANT — SHARED SITE BEHAVIOUR
========================================================= */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Populate images from js/images.js ---------- */
  function resolvePath(path) {
    if (typeof IMAGES === "undefined") return undefined;
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), IMAGES);
  }

  document.querySelectorAll("[data-img]").forEach((el) => {
    const val = resolvePath(el.getAttribute("data-img"));
    if (val === undefined) return;
    const src = typeof val === "string" ? val : val.src;
    if (el.tagName === "IMG") {
      el.src = src;
      if (!el.getAttribute("alt") && val.alt) el.alt = val.alt;
    } else {
      el.style.backgroundImage = `url('${src}')`;
    }
  });

  document.querySelectorAll("[data-lightbox-key]").forEach((btn) => {
    const val = resolvePath(btn.getAttribute("data-lightbox-key"));
    if (val === undefined) return;
    const src = typeof val === "string" ? val : val.src;
    btn.setAttribute("data-lightbox-src", src);
  });

  /* ---------- Sticky header ---------- */
  const header = document.querySelector(".site-header");
  function updateHeader() {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add("is-solid");
    else header.classList.remove("is-solid");
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* ---------- Mobile nav ---------- */
  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector(".main-nav");
  if (hamburger && mainNav) {
    hamburger.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      hamburger.classList.toggle("is-open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        hamburger.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = prefersReducedMotion ? "0s" : `${Math.min(i % 4, 3) * 0.1}s`;
      observer.observe(el);
    });
  }

  /* ---------- Hero slideshow (crossfade) ---------- */
  const heroSlides = document.querySelectorAll(".hero-slide");
  if (heroSlides.length > 1 && !prefersReducedMotion) {
    let active = 0;
    heroSlides[0].classList.add("is-active");
    setInterval(() => {
      heroSlides[active].classList.remove("is-active");
      active = (active + 1) % heroSlides.length;
      heroSlides[active].classList.add("is-active");
    }, 6000);
  } else if (heroSlides.length) {
    heroSlides[0].classList.add("is-active");
  }

  /* ---------- Lightbox gallery ---------- */
  const galleryButtons = document.querySelectorAll("[data-lightbox-src]");
  const lightbox = document.querySelector(".lightbox");
  if (galleryButtons.length && lightbox) {
    const lightboxImg = lightbox.querySelector("img");
    const closeBtn = lightbox.querySelector(".lightbox-close");
    const prevBtn = lightbox.querySelector(".lightbox-prev");
    const nextBtn = lightbox.querySelector(".lightbox-next");
    const sources = Array.from(galleryButtons).map((b) => ({
      src: b.getAttribute("data-lightbox-src"),
      alt: b.getAttribute("data-lightbox-alt") || ""
    }));
    let currentIndex = 0;
    let lastFocused = null;

    function openLightbox(index) {
      currentIndex = index;
      lightboxImg.src = sources[currentIndex].src;
      lightboxImg.alt = sources[currentIndex].alt;
      lastFocused = document.activeElement;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      closeBtn.focus();
      document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }
    function show(delta) {
      currentIndex = (currentIndex + delta + sources.length) % sources.length;
      lightboxImg.src = sources[currentIndex].src;
      lightboxImg.alt = sources[currentIndex].alt;
    }

    galleryButtons.forEach((btn, i) => {
      btn.addEventListener("click", () => openLightbox(i));
    });
    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", () => show(-1));
    nextBtn.addEventListener("click", () => show(1));
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") show(1);
      if (e.key === "ArrowLeft") show(-1);
    });
  }

  /* ---------- Reservation / contact form validation ---------- */
  function setupForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    const status = form.querySelector(".form-status");

    function setError(field, message) {
      const wrapper = field.closest(".field");
      const errorEl = wrapper ? wrapper.querySelector(".error-msg") : null;
      if (wrapper) wrapper.classList.toggle("has-error", Boolean(message));
      if (errorEl) errorEl.textContent = message || "";
    }

    function validateField(field) {
      if (!field.hasAttribute("required") && field.value.trim() === "" && field.type !== "date" && field.type !== "time") {
        setError(field, "");
        return true;
      }
      if (field.hasAttribute("required") && field.value.trim() === "") {
        setError(field, "This field is required.");
        return false;
      }
      if (field.type === "email" && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        setError(field, "Please enter a valid email address.");
        return false;
      }
      if (field.type === "tel" && field.value && !/^[\d\s()+-]{7,}$/.test(field.value)) {
        setError(field, "Please enter a valid phone number.");
        return false;
      }
      if (field.type === "date" && field.value) {
        const chosen = new Date(field.value + "T00:00:00");
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (chosen < today) {
          setError(field, "Please choose today or a future date.");
          return false;
        }
      }
      if (field.type === "time" && field.value) {
        const [h, m] = field.value.split(":").map(Number);
        const minutes = h * 60 + m;
        const openMin = 11 * 60; // 11:00
        const closeMin = 22 * 60; // 22:00
        if (minutes < openMin || minutes > closeMin) {
          setError(field, "Please choose a time between 11:00 AM and 10:00 PM.");
          return false;
        }
      }
      if (field.name === "guests" && field.value) {
        const n = Number(field.value);
        if (n < 1 || n > 12) {
          setError(field, "Please choose between 1 and 12 guests.");
          return false;
        }
      }
      setError(field, "");
      return true;
    }

    const fields = form.querySelectorAll("input, select, textarea");
    fields.forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
    });

    const dateField = form.querySelector('input[type="date"]');
    if (dateField) {
      const now = new Date();
      const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
      dateField.setAttribute("min", todayStr);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;
      fields.forEach((field) => {
        if (!validateField(field)) valid = false;
      });

      if (!valid) {
        status.textContent = "Please fix the highlighted fields and try again.";
        status.className = "form-status show error";
        return;
      }

      status.textContent = "Sending your request...";
      status.className = "form-status show";

      const action = form.getAttribute("action");
      const isPlaceholder = !action || action.includes("YOUR_FORM_ID");

      if (isPlaceholder) {
        // TODO: Replace the Formspree endpoint in the form's action attribute, then remove this placeholder branch.
        setTimeout(() => {
          status.textContent =
            "Demo mode: connect this form to Formspree (see README) to actually send messages. Your details were not sent anywhere.";
          status.className = "form-status show error";
        }, 500);
        return;
      }

      fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then((response) => {
          if (response.ok) {
            status.textContent = "Thank you! Your request has been sent. We'll be in touch shortly.";
            status.className = "form-status show success";
            form.reset();
          } else {
            status.textContent = "Something went wrong sending your request. Please call us instead.";
            status.className = "form-status show error";
          }
        })
        .catch(() => {
          status.textContent = "Something went wrong sending your request. Please call us instead.";
          status.className = "form-status show error";
        });
    });
  }

  setupForm("reservation-form");
  setupForm("contact-form");

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Specials filter + render ---------- */
  const specialsGrid = document.querySelector("[data-specials-grid]");
  if (specialsGrid && typeof SPECIALS !== "undefined") {
    function renderSpecials(filter) {
      specialsGrid.innerHTML = "";
      const items = filter === "all" ? SPECIALS : SPECIALS.filter((d) => d.category === filter);
      items.forEach((dish, i) => {
        const card = document.createElement("article");
        card.className = "special-card reveal";
        card.style.transitionDelay = `${Math.min(i % 4, 3) * 0.08}s`;
        card.innerHTML = `
          <div class="card-img-wrap" style="position:relative;">
            ${dish.chefsPick ? '<span class="badge-pick">Chef’s Pick</span>' : ""}
            <img src="${dish.image}" alt="${dish.name}" loading="lazy" width="900" height="675">
          </div>
          <div class="card-body">
            <h3>${dish.name}</h3>
            <p>${dish.description}</p>
            <span class="price">${dish.price}</span>
          </div>`;
        specialsGrid.appendChild(card);
      });

      if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        specialsGrid.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      } else {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );
        specialsGrid.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
      }
    }

    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        renderSpecials(btn.getAttribute("data-filter"));
      });
    });

    renderSpecials("all");
  }
})();
