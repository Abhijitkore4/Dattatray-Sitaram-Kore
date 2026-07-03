/*====================================================
                MOBILE MENU
=====================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });

}


/*====================================================
                STICKY HEADER
=====================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "0 2px 20px rgba(0,0,0,.05)";

    }

});


/*====================================================
                SCROLL TO TOP
=====================================================*/

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/*====================================================
                FAQ ACCORDION
=====================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.classList.remove("active");

                other.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");

        if (item.classList.contains("active")) {

            answer.style.maxHeight = answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});


/*====================================================
            ACTIVE NAVIGATION
=====================================================*/

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*====================================================
            SMOOTH SCROLL
=====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*====================================================
            REVEAL ON SCROLL
=====================================================*/

const reveals = document.querySelectorAll(

    ".service-card, .mission-card, .trust-item, .testimonial-card, .process-card"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

reveals.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".6s ease";

    observer.observe(card);

});


/*====================================================
                COUNTER
=====================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const raw = counter.innerText;

        const target = parseInt(raw.replace(/\D/g, ""));

        const suffix = raw.replace(/[0-9]/g, "");

        let count = 0;

        const increment = Math.max(1, Math.ceil(target / 100));

        const timer = setInterval(() => {

            count += increment;

            if (count >= target) {

                count = target;

                clearInterval(timer);

            }

            counter.innerText = count + suffix;

        }, 20);

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.6

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*====================================================
                CURRENT YEAR
=====================================================*/

const footerText = document.querySelector(".footer-bottom p");

if (footerText) {

    footerText.innerHTML = `© ${new Date().getFullYear()} Dattatray Sitaram Kore Tax Consultant. All Rights Reserved.`;

}


/*====================================================
                PRELOADER SUPPORT
=====================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*====================================================
                CONSOLE MESSAGE
=====================================================*/

console.log("%cWebsite Developed Successfully",
    "color:#0F4C81;font-size:18px;font-weight:bold;");

/*==================================
    OPEN CONSULTATION POPUP
==================================*/

const modal = document.getElementById("consultationModal");

const consultationButtons = document.querySelectorAll(".consultation-btn");

const closeBtn = document.querySelector(".close-modal");

consultationButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        if (modal) {

            modal.style.display = "flex";

        }

        document.body.style.overflow = "hidden";

    });

});

if (closeBtn) {

    closeBtn.addEventListener("click", closeModal);

}


window.addEventListener("click", function (e) {

    if (e.target === modal) {

        closeModal();

    }

});

function closeModal() {

    modal.style.display = "none";

    document.body.style.overflow = "auto";

}

/*==================================
    CONSULTATION FORM
==================================*/

const consultationForm = document.getElementById("consultationForm");

if (consultationForm) {

    consultationForm.addEventListener("submit", function (e) {

        e.preventDefault();

        e.preventDefault();

        const name = document.getElementById("consultName").value.trim();

        const phone = document.getElementById("consultPhone").value.trim();

        const service = document.getElementById("consultService").value;

        const message = document.getElementById("consultMessage").value.trim();

        const whatsappMessage =
            `Hello,

I visited your website and would like to book a consultation.

------------------------------------

Name: ${name}   

Mobile: ${phone}

Service: ${service}

Requirement: ${message}

------------------------------------

Please contact me at your earliest convenience.

Thank you.`;

        const whatsappURL =
            `https://wa.me/919860175670?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

        consultationForm.reset();

        closeModal();

    });
}
