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
