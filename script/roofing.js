document.querySelectorAll('.inner').forEach(inner => {
    const container = inner.querySelector('.container');
    const slider = inner.querySelector('.slider');
    
    slider.addEventListener('input', (e) => {
      container.style.setProperty('--position', `${e.target.value}%`);
    });
  });

