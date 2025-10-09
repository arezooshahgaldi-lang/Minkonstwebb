document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  const cart = document.getElementById('cart');
  const cartBtn = document.querySelector('.cart-btn');

  // منوی همبرگر ساده‌شده
  if (menuToggle && nav) {
    const mqDesktop = window.matchMedia('(min-width: 769px)');

    function closeOnDesktop() {
      if (mqDesktop.matches) {
        nav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }

    mqDesktop.addEventListener('change', closeOnDesktop);
    closeOnDesktop(); // در لود هم اجرا شود

    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen.toString());
    });

    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        if (!e.target.closest('#menu-toggle') && !e.target.closest('#nav') && nav.classList.contains('active')) {
          nav.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  // مدیریت سبد خرید
  let cartItems = [];

  window.addToCart = function(item) {
    cartItems.push(item);
    updateCart();
    if (cart) cart.style.display = 'block'; // سبد را نمایش بده
    if (cartBtn) cartBtn.setAttribute('aria-label', `Kundvagn (${cartItems.length})`);
  };

  function updateCart() {
    const cartList = document.getElementById('cart-items');
    const emptyMSG = document.getElementById('empty-msg');
    if (!cartList) return;

    cartList.innerHTML = '';
    if (cartItems.length === 0) {
      cart.classList.add('is-empty');
      if (emptyMSG) emptyMSG.style.display = 'block';
    } else {
      cart.classList.remove('is-empty');
      if (emptyMSG) emptyMSG.style.display = 'none';
      cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
      });
    }
  }

  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.toggleCart();
    });
  }

  window.toggleCart = function() {
    if (cart) {
      cart.style.display = (cart.style.display === 'block') ? 'none' : 'block';
    }
  };

  window.goToCheckout = function() {
    alert('Du går till kassan!');
  };

  updateCart();
   function goToHome() {
    window.location.href = 'konst1.html';
  }
});
