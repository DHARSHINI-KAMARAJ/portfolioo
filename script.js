const roles = [
"Japanese N4 Certified",
  "Software Developer",
 "Bilingual Analyst",
"Japanese Language Educator",
  "International Tech Aspirant"
];

let roleIndex = 0;
let charIndex = 0;
const typing = document.querySelector(".typing");

function type() {
  if (charIndex < roles[roleIndex].length) {
    typing.textContent += roles[roleIndex][charIndex];
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typing.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500);
  }
}

type();

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - window.innerHeight + 100;
    if (top >= offset) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

