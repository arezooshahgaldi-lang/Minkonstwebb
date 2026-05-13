// cart.js 
(function () {

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem('cart') || '[]');
    } catch {
      return [];
    }
  }

  function saveCart(c) {
    localStorage.setItem('cart', JSON.stringify(c));
  }

  function formatSEK(n) {
    try {
      return new Intl.NumberFormat('sv-SE').format(n) + ' kr';
    } catch {
      return n + ' kr';
    }
  }

  function updateCartBadge() {
    const b = document.getElementById('cart-count');
    if (!b) return;
    const count = getCart().reduce((sum, item) => sum + (item.qty || 1), 0);
    b.textContent = count > 0 ? String(count) : '';
    b.classList.remove('cart-bump');
    void b.offsetWidth;
    b.classList.add('cart-bump');
  }

  function showMiniCart(item) {
    const box = document.getElementById('mini-cart');
    if (!box) return;
    const thumb = document.getElementById('mini-cart-thumb');
    const title = document.getElementById('mini-cart-title');
    const price = document.getElementById('mini-cart-price');

    thumb.src = item.image || '';
    thumb.alt = item.title || '';
    title.textContent = item.title || '';
    price.textContent = formatSEK(item.price || 0);

    box.classList.add('show');
    clearTimeout(showMiniCart._t);
    showMiniCart._t = setTimeout(() => box.classList.remove('show'), 2200);
  }

  function addToCart(item) {
    const cart = getCart();
    const idx = cart.findIndex((x) => x.id === item.id);
    if (idx >= 0) cart[idx].qty = (cart[idx].qty || 1) + 1;
    else cart.push({ ...item, qty: 1 });
    saveCart(cart);
    updateCartBadge();
    showMiniCart(item);
  }

  window.chosenItemFunctions = [];


  document.addEventListener('DOMContentLoaded', () => {
  
    document.querySelectorAll('.add-to-cart').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const item = {
          id: btn.dataset.id,
          title: btn.dataset.title,
          price: Number((btn.dataset.price || '').replace(/\s/g, '')),
          image: btn.dataset.image || '',
        };

        
        window.chosenItemFunctions.push(() => {
          console.log(`Vald vara: ${item.title} (${item.price} SEK)`);
        });

        addToCart(item);
      });
    });
     updateCartBadge();
   
    const cartLink = document.getElementById('cart-link');
    const mini = document.getElementById('mini-cart');
    if (cartLink && mini) {
      cartLink.addEventListener('mouseenter', () => {
        const cart = getCart();
        if (cart.length > 0) {
          const lastItem = cart[cart.length - 1];
          showMiniCart(lastItem);
        } else {
          mini.classList.remove('show');
        }
      });
      cartLink.addEventListener('mouseleave', () => mini.classList.remove('show'));
    }

   
    const cartCounter = document.getElementById('cart-count');
    if (cartCounter) {
      if (cartCounter.textContent.trim() === '') {
        cartCounter.style.display = 'none';
      } else {
        cartCounter.style.display = 'inline-block';
      }
    }

    
    updateCartBadge();
  });


  window.CART = { getCart, saveCart, formatSEK, updateCartBadge };
})();
