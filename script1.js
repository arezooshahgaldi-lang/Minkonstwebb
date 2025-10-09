// Vänta tills hela dokumentet (DOM) är laddat
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  const cartBtn = document.querySelector('.cart-btn');

  // menuToggle - nav)
  if (menuToggle && nav) {
    const mqDesktop = window.matchMedia('(min-width: 769px)');

    function closeOnDesktop() {
      if (mqDesktop.matches) {
        nav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }

    mqDesktop.addEventListener('change', closeOnDesktop);
    closeOnDesktop();

    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen.toString());
    });

    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        if (
          !e.target.closest('#menu-toggle') &&
          !e.target.closest('#nav') &&
          nav.classList.contains('active')
        ) {
          nav.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  //// Förhindrar standardbeteendet för alla länkar som börjar med "#" 
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => e.preventDefault());
  });

  //knappen som går på start sidan
  const backBtn = document.getElementById('btn-back-home');
  backBtn?.addEventListener('click', () => {
    window.location.href = './konst1.html';
  });

  // // Öppnar inloggningsfönstret i en centrerad popup
  const openLogin = document.getElementById('open-login'); // <a id="open-login">
  if (openLogin) {
    openLogin.addEventListener('click', (e) => {
      e.preventDefault();
      const w = 540, h = 660;
      const left = Math.round((window.screen.width - w) / 2);
      const top  = Math.round((window.screen.height - h) / 2);
      const features = `width=${w},height=${h},left=${left},top=${top},noopener`;
      const popup = window.open('./loggin.html', 'loginWindow', features);
      if (popup) popup.opener = null;
    });
  }
});
