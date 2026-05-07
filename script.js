/*==================== toggle icon navbar ====================*/
const menuButton = document.querySelector("#menu-icon");
const menuButtonIcon = menuButton.querySelector("i");
const navbar = document.querySelector(".navbar");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setMenuOpen(isOpen) {
    menuButtonIcon.classList.toggle("bx-x", isOpen);
    menuButtonIcon.classList.toggle("bx-menu", !isOpen);
    navbar.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

// ==================== smooth scroll ====================
let lenis;
const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

if (!prefersReducedMotion.matches && window.Lenis) {
    lenis = new Lenis({
        smooth: true,
        lerp: 0.1,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        const targetId = anchor.getAttribute("href");
        if (targetId.length > 1) {
            const target = document.querySelector(targetId);
            if (target && lenis) {
                e.preventDefault();
                lenis.scrollTo(target, {
                    duration: 0.5,
                    easing: easeOutQuad,
                });
            }
            setMenuOpen(false);
        }
    });
});

menuButton.addEventListener("click", () => {
    setMenuOpen(!navbar.classList.contains("active"));
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navbar.classList.contains("active")) {
        setMenuOpen(false);
        menuButton.focus();
    }
});

// ================= email mechnism ===========================
document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const to_name = "ah0681988@gmail.com";
        const from_name = document.getElementById("name").value; // Use 'name' for full name
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const submitButton = document.getElementById("submit_btn");
        const loadingButton = document.getElementById("loading-btn");

        if (!from_name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // show loading animation while the message is send
        submitButton.style.display = "none";
        loadingButton.style.display = "flex";
        loadingButton.setAttribute("aria-hidden", "false");

        emailjs.init("ZjCuN6YW2Pc9Rn72H"); // Replace with the correct key
        emailjs
            .send("service_bvch679", "template_lbxvkkb", {
                to_name: to_name,
                from_name: from_name,
                email: email, // Include this if needed
                message: message,
            })
            .then(
                function () {
                    submitButton.style.display = "block";
                    loadingButton.style.display = "none";
                    loadingButton.setAttribute("aria-hidden", "true");
                    document.getElementById("contact-form").reset();
                    showMessage();
                },
                function (error) {
                    alert("Error sending message: " + JSON.stringify(error));
                    submitButton.style.display = "block";
                    loadingButton.style.display = "none";
                    loadingButton.setAttribute("aria-hidden", "true");
                }
            );
    });

function showMessage() {
    let messageBox = document.getElementById("custom-message");
    // Add slide-in animation
    messageBox.style.animation = "slideIn 0.5s ease-in forwards";
    // Remove animation & add fade-out after 4s
    setTimeout(() => {
        messageBox.style.animation = "fadeOut 1s ease-out forwards";
    }, 4000);
}

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                links.removeAttribute("aria-current");
            });
            const activeLink = document.querySelector(
                "header nav a[href*=" + id + "]"
            );
            activeLink.classList.add("active");
            activeLink.setAttribute("aria-current", "location");
        }
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    setMenuOpen(false);
};

/*==================== scroll reveal ====================*/
if (!prefersReducedMotion.matches && window.ScrollReveal) {
    ScrollReveal({
        reset: false,
        distance: "20px",
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(
        ".home-img, .services-container, .portfolio-box, .contact form",
        { origin: "bottom" }
    );
    ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
    ScrollReveal().reveal(".home-content p, .about-content  ", { origin: "right" });
}

/*==================== typed js ====================*/
if (!prefersReducedMotion.matches && window.Typed) {
    new Typed(".multiple-text", {
        strings: ["Frontend Dev", "Backend Dev", "UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 10,
        backDelay: 1000,
        loop: true,
        reset: true,
    });
} else {
    document.querySelector(".multiple-text").textContent = "Full Stack Developer";
}
