// ==========================================
// WAIT FOR PAGE TO LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    // ==========================================
    // STICKY NAVBAR
    // ==========================================

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.padding = "0";
            header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";

        } else {

            header.style.boxShadow = "0 4px 15px rgba(0,0,0,.08)";

        }

    });

    // ==========================================
    // ACTIVE NAV LINK
    // ==========================================

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href").includes(current)) {

                link.classList.add("active");

            }

        });

    });

    // ==========================================
    // TEAM CARD EFFECT
    // ==========================================

    const members = document.querySelectorAll(".member");

    members.forEach(member => {

        member.addEventListener("mouseenter", () => {

            member.style.transform = "translateY(-10px) scale(1.02)";

        });

        member.addEventListener("mouseleave", () => {

            member.style.transform = "translateY(0)";

        });

    });

    // ==========================================
    // VALUE CARD EFFECT
    // ==========================================

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-12px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });

});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#0f72ff";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";
topButton.style.transition = ".3s";

window.addEventListener("scroll", ()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

const progress = document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="4px";
progress.style.background="#0f72ff";
progress.style.width="0%";
progress.style.zIndex="99999";

window.addEventListener("scroll",()=>{

    const scroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const width = (scroll/height)*100;

    progress.style.width = width + "%";

});

// ==========================================
// IMAGE FADE EFFECT
// ==========================================

const images = document.querySelectorAll("img");

images.forEach(image=>{

    image.style.transition=".5s";

    image.addEventListener("mouseenter",()=>{

        image.style.filter="brightness(1.05)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.filter="brightness(1)";

    });

});

