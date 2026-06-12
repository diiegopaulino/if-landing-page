
// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  const isOpen = navbar.classList.toggle('menu-open');
  hamburger.setAttribute('aria-expanded', isOpen);
});
navbar.querySelectorAll('ul a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('menu-open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

// Counter animation
function animateCounters() {
  const counters = document.querySelectorAll('.impact-number[data-target]');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const suffix = counter.innerHTML.includes('+') ? '<span>+</span>' : '';
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      counter.innerHTML = Math.floor(current) + suffix;
      if (current >= target) clearInterval(timer);
    }, 20);
  });
}

// Trigger on scroll
const impactBar = document.querySelector('.impact-bar');
let animated = false;
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !animated) {
    animated = true;
    animateCounters();
  }
}, { threshold: 0.5 });
observer.observe(impactBar);

// Form handler
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ Mensagem enviada!';
  btn.style.background = '#16a34a';
  setTimeout(() => {
    btn.textContent = 'Enviar mensagem';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}
