const heroContent = document.querySelector('.hero-content');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  const heroHeight = window.innerHeight;

  // Normalize scroll progress (0 to 1)
  const progress = Math.min(scrollPos / heroHeight, 1);

  // Text animation
  heroContent.style.transform = `translateY(${progress * 200}px) scale(${1 - progress * 0.5})`;
  heroContent.style.opacity = `${1 - progress}`;

  // Parallax background effect
  hero.style.backgroundPositionY = `${scrollPos * 0.5}px`;
});