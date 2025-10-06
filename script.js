const eventDate = new Date("2025-10-19T15:00:00").getTime();
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff <= 0) {
    clearInterval(countdown);
    document.querySelector(".timer").innerHTML = "🎉 It's Party Time!";
    document.querySelector(".timer").style.color = "white";
    document.querySelector(".timer").style.fontSize = "2em";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);


const fadeInElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeInElements.forEach(el => observer.observe(el));