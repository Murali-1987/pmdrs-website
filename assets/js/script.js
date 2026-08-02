const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// document.querySelectorAll('a[href^="#"]').forEach(a=>a.onclick=e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}});console.log('PMDRS v1 Loaded');

/* =====================================================
   PMDRS - About Section Animation
   Version : v1.2
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const aboutCards = document.querySelectorAll(".about-card");

    if (aboutCards.length > 0) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.20
        });

        aboutCards.forEach(card => {

            card.classList.add("hidden");

            observer.observe(card);

        });

    }

});

/* ============================================================
   PMDRS - Services Section
   Version : v1.3
============================================================ */

document.addEventListener("DOMContentLoaded", function () {

    const serviceCards = document.querySelectorAll(".service-card");

    if (serviceCards.length === 0) return;

    /* Scroll Animation */

    const serviceObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("service-show");

                serviceObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.20
    });

    serviceCards.forEach(card => {

        card.classList.add("service-hidden");

        serviceObserver.observe(card);

    });

    /* Hover Effect */

    serviceCards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-12px) scale(1.02)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "";

        });

    });

    console.log("PMDRS Services Section Loaded Successfully");

});

/* ==========================================================
                    TECHNOLOGIES SECTION
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const technologyCards = document.querySelectorAll(".technology-card");

    if (technologyCards.length === 0) return;

    /* -----------------------------------------
       Scroll Animation
    ------------------------------------------ */

    const technologyObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("technology-show");

                technologyObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.20

    });

    technologyCards.forEach(card => {

        card.classList.add("technology-hidden");

        technologyObserver.observe(card);

    });

    /* -----------------------------------------
       Hover Animation
    ------------------------------------------ */

    technologyCards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-12px) scale(1.03)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "";

        });

    });

    /* -----------------------------------------
       Icon Rotation
    ------------------------------------------ */

    technologyCards.forEach(card => {

        const icon = card.querySelector(".technology-icon");

        card.addEventListener("mouseenter", function () {

            icon.style.transform = "rotate(360deg)";

            icon.style.transition = "0.8s";

        });

        card.addEventListener("mouseleave", function () {

            icon.style.transform = "rotate(0deg)";

        });

    });

    console.log("PMDRS Technologies Section Loaded Successfully");

});

/* ==========================================================
                    STATISTICS SECTION
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".counter");
    const statCards = document.querySelectorAll(".stat-card");

    if (counters.length === 0) return;

    const statisticsObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("stat-show");

                const counter = entry.target.querySelector(".counter");

                if (counter && !counter.classList.contains("counted")) {

                    animateCounter(counter);

                    counter.classList.add("counted");

                }

                statisticsObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.25

    });

    statCards.forEach(card => {

        card.classList.add("stat-hidden");

        statisticsObserver.observe(card);

    });

    function animateCounter(counter) {

        const target = parseInt(counter.getAttribute("data-target"));

        let current = 0;

        const increment = Math.ceil(target / 80);

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.innerText = current;

        }, 20);

    }

    /* Hover Animation */

    statCards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-12px) scale(1.03)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "";

        });

    });

    console.log("PMDRS Statistics Section Loaded Successfully");

});

/* ==========================================================
                WHY CHOOSE PMDRS SECTION
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const whyCards = document.querySelectorAll(".why-card");

    if (whyCards.length === 0) return;

    /* -----------------------------------------
       Scroll Animation
    ------------------------------------------ */

    const whyObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("why-show");

                whyObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.20

    });

    whyCards.forEach(card => {

        card.classList.add("why-hidden");

        whyObserver.observe(card);

    });

    /* -----------------------------------------
       Hover Animation
    ------------------------------------------ */

    whyCards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-12px) scale(1.03)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "";

        });

    });

    /* -----------------------------------------
       Icon Rotation
    ------------------------------------------ */

    whyCards.forEach(card => {

        const icon = card.querySelector(".why-icon");

        card.addEventListener("mouseenter", function () {

            icon.style.transform = "rotate(360deg)";

            icon.style.transition = "0.8s ease";

        });

        card.addEventListener("mouseleave", function () {

            icon.style.transform = "rotate(0deg)";

        });

    });

    console.log("PMDRS Why Choose Section Loaded Successfully");

});

/* ==========================================================
                INDUSTRIES SECTION
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const industryCards = document.querySelectorAll(".industry-card");

    if (industryCards.length === 0) return;

    /* -----------------------------------------
       Scroll Animation
    ------------------------------------------ */

    const industryObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("industry-show");

                industryObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.20

    });

    industryCards.forEach(card => {

        card.classList.add("industry-hidden");

        industryObserver.observe(card);

    });

    /* -----------------------------------------
       Hover Animation
    ------------------------------------------ */

    industryCards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-12px) scale(1.03)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "";

        });

    });

    /* -----------------------------------------
       Icon Rotation
    ------------------------------------------ */

    industryCards.forEach(card => {

        const icon = card.querySelector(".industry-icon");

        card.addEventListener("mouseenter", function () {

            icon.style.transform = "rotate(360deg)";

            icon.style.transition = "0.8s ease";

        });

        card.addEventListener("mouseleave", function () {

            icon.style.transform = "rotate(0deg)";

        });

    });

    console.log("PMDRS Industries Section Loaded Successfully");

});

/* ==========================================================
                    CONTACT SECTION
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const contactSection = document.querySelector(".contact");
    const contactForm = document.querySelector(".contact-form");
    const contactInfo = document.querySelector(".contact-info");

    if (!contactSection) return;

    /* -----------------------------------------
       Scroll Animation
    ------------------------------------------ */

    const contactObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                if (contactInfo) contactInfo.classList.add("contact-show");
                if (contactForm) contactForm.classList.add("contact-show");

                contactObserver.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.20

    });

    if (contactInfo) {
        contactInfo.classList.add("contact-hidden");
    }

    if (contactForm) {
        contactForm.classList.add("contact-hidden");
    }

    contactObserver.observe(contactSection);

    /* -----------------------------------------
       Contact Form Validation
    ------------------------------------------ */

    const form = document.querySelector(".contact-form form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = form.querySelector("input[type='text']").value.trim();
            const email = form.querySelector("input[type='email']").value.trim();

            if (name === "" || email === "") {

                alert("Please fill in the required fields.");

                return;

            }

            alert("Thank you! Your message has been received. We will contact you soon.");

            form.reset();

        });

    }

    /* -----------------------------------------
       Hover Effect
    ------------------------------------------ */

    document.querySelectorAll(".contact-item").forEach(item => {

        item.addEventListener("mouseenter", function () {

            this.style.transform = "translateX(10px)";
            this.style.transition = "0.3s ease";

        });

        item.addEventListener("mouseleave", function () {

            this.style.transform = "";

        });

    });

    console.log("PMDRS Contact Section Loaded Successfully");

});
