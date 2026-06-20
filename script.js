const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.right = "20px";
        navLinks.style.background = "#ffffff";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "12px";
        navLinks.style.boxShadow =
            "0 10px 25px rgba(0,0,0,0.15)";

    }

});

/* CLOSE MENU AFTER CLICK */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 768) {

            navLinks.style.display = "none";

        }

    });

});

/* SCROLL REVEAL ANIMATION */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".stat-card, .skill-card, .project-card, .featured-project, .focus-card, .contact-box"
).forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});

/* ACTIVE NAVIGATION */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {
            link.classList.add("active");
        }

    });

});

/* NAVBAR SHADOW ON SCROLL */

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
        "0 10px 25px rgba(0,0,0,0.12)";

    } else {

        navbar.style.boxShadow =
        "0 2px 15px rgba(0,0,0,0.08)";

    }

});

/* PROJECT CARD HOVER EFFECT */

document.querySelectorAll(".project-card")
.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px)";

    });

});