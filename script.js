const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: '0px 0px -8% 0px'
  }
);

reveals.forEach((section) => observer.observe(section));

const board = document.querySelector('.hero-board');

if (board) {
  const updateGlow = (event) => {
    const rect = board.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    board.style.setProperty('--pointer-x', `${x}%`);
    board.style.setProperty('--pointer-y', `${y}%`);
  };

  board.addEventListener('pointermove', updateGlow);
  board.addEventListener('pointerleave', () => {
    board.style.setProperty('--pointer-x', '50%');
    board.style.setProperty('--pointer-y', '35%');
  });
}
