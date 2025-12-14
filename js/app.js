document.addEventListener('DOMContentLoaded',()=>{
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  menuBtn && menuBtn.addEventListener('click',()=>{nav.style.display = (nav.style.display==='flex')? 'none':'flex'});

  // gallery modal
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const closeModal = document.getElementById('closeModal');
  document.querySelectorAll('.gallery-grid img').forEach(img=>{
    img.addEventListener('click',()=>{
      modalImg.src = img.dataset.full || img.src;
      modal.classList.add('show');
      modal.setAttribute('aria-hidden','false');
    });
  });
  closeModal && closeModal.addEventListener('click',()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true')});
  modal.addEventListener('click',(e)=>{if(e.target===modal) modal.classList.remove('show')});

  // contact form (demo) — prevent real submission
  const form = document.getElementById('contactForm');
  if(form) form.addEventListener('submit',(e)=>{e.preventDefault();alert('Thanks! We received your message. (Demo)')});
});
