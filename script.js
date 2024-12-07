// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // Prevent default behavior of links
        const targetSection = document.querySelector(link.getAttribute("href"));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Explore button functionality
const exploreBtn = document.querySelector(".button");
if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        const featuredSection = document.querySelector(".categories");
        if (featuredSection) {
            featuredSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// Categories interaction
document.querySelectorAll(".categories .col-3").forEach(category => {
    category.addEventListener("click", () => {
        alert(`You selected the "${category.innerText}" category!`);
        const featuredSection = document.querySelector(".small-container");
        if (featuredSection) {
            featuredSection.scrollIntoView({ behavior: "smooth" });
        }
    });

    category.addEventListener("mouseover", () => {
        category.style.backgroundColor = "#f8f8f8";
        category.style.cursor = "pointer";
        category.style.transition = "background-color 0.3s ease";
    });

    category.addEventListener("mouseout", () => {
        category.style.backgroundColor = "transparent";
    });
});

// Featured products click event
document.querySelectorAll(".row .col-4 img").forEach(product => {
    product.addEventListener("click", () => {
        alert("Product clicked: " + product.nextElementSibling.innerText);
    });
});

// App download image click functionality
document.querySelectorAll(".app-logo img").forEach(logo => {
    logo.addEventListener("click", () => {
        alert("Redirecting to app download page!");
        window.open("https://www.apple.com/in/app-store/", "_blank");
        window.open("https://play.google.com", "_blank");
    });
});

// Latest product hover effect
document.querySelectorAll(".row .col-4 img").forEach(product => {
    product.addEventListener("mouseover", () => {
        product.style.border = "2px solid coral";
        product.style.transform = "scale(1.1)";
        product.style.transition = "transform 0.3s ease, border 0.3s ease";
    });
    product.addEventListener("mouseout", () => {
        product.style.border = "none";
        product.style.transform = "scale(1)";
    });
});

// Scroll to sections using nav links
const scrollToSection = (selector) => {
    const section = document.querySelector(selector);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

document.querySelector('nav ul li a[href="#home"]')?.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector('nav ul li a[href="#products"]')?.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection("#products");
});

document.querySelector('nav ul li a[href="#about"]')?.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection("#about");
});

document.querySelector('nav ul li a[href="#contact"]')?.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection("#contact");
});

// Account link (redirect to account/login page)
const accountLink = document.querySelector('nav ul li a[href="#account"]');
accountLink?.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Redirecting to the Account/Login page.");
    window.location.href = "file:///C:/Users/indre/OneDrive/Desktop/pratice/login.html"; // Example redirect URL
});

// Smooth scroll for all anchor links starting with "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Open social media links in a new tab
document.querySelectorAll('.footer-col-4 ul li a').forEach(link => {
    link.setAttribute('target', '_blank'); // Open in a new tab
});

