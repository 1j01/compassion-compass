(() => {
  const hero = document.querySelector('.hero');
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const updateParallax = () => {
    const offset = (window.scrollY) * 0.5;
    hero.style.setProperty('--hero-pan', `${offset.toFixed(2)}px`);
  };

  const updateParallaxSoon = () => {
    requestAnimationFrame(updateParallax);
  };

  window.addEventListener('scroll', updateParallaxSoon, { passive: true });
  window.addEventListener('resize', updateParallaxSoon);
  updateParallaxSoon();
})();
