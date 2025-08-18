const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('closeBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');
    galleryImages.forEach(img => {
      if (category === 'all' || img.getAttribute('data-category') === category) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  });
});
