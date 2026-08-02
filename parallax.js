(() => {
  const hero = document.querySelector('.hero');
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  let ticking = false;

  const updateParallax = () => {
    const heroRect = hero.getBoundingClientRect();
    const heroTop = window.scrollY + heroRect.top;
    const offset = (window.scrollY - heroTop) * 0.5;

    hero.style.setProperty('--hero-pan', `${offset.toFixed(2)}px`);
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateParallax);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();
