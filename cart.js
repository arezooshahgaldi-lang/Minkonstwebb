// cart.js 
(function(){
  function getCart(){ try{return JSON.parse(localStorage.getItem('cart')||'[]')}catch{return[]} }
  function saveCart(c){ localStorage.setItem('cart', JSON.stringify(c)); }
  function formatSEK(n){
    try { return new Intl.NumberFormat('sv-SE').format(n) + ' kr'; }
    catch { return n + ' kr'; }
  }

  // Badge ,antal varor i kundvagnen
  function updateCartBadge(){
    const b = document.getElementById('cart-count');
    if(!b) return;
    const count = getCart().reduce((sum, item)=> sum + (item.qty||1), 0);
    b.textContent = count > 0 ? String(count) : '';
    b.classList.remove('cart-bump');
    // trigger reflow for animation
    void b.offsetWidth;
    b.classList.add('cart-bump');
  }

  // Mini-cart: آیتم آخر را نشان بده
  function showMiniCart(item){
    const box = document.getElementById('mini-cart');
    if(!box) return;
    const thumb = document.getElementById('mini-cart-thumb');
    const title = document.getElementById('mini-cart-title');
    const price = document.getElementById('mini-cart-price');

    thumb.src = item.image || '';
    thumb.alt = item.title || '';
    title.textContent = item.title || '';
    price.textContent = CART.formatSEK(item.price || 0);

    box.classList.add('show');
    clearTimeout(showMiniCart._t);
    showMiniCart._t = setTimeout(()=> box.classList.remove('show'), 2200);
  }

  function addToCart(item){
    const cart = getCart();
    const idx = cart.findIndex(x => x.id === item.id);
    if (idx >= 0) cart[idx].qty = (cart[idx].qty || 1) + 1;
    else cart.push({ ...item, qty: 1 });
    saveCart(cart);
    updateCartBadge();
    showMiniCart(item);
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    //koppla knappar med addToCart
    document.querySelectorAll('.add-to-cart').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.preventDefault(); // Förhindra standardbeteende
        const item = {   // den bygger en objekt från data- attributer in i item
          id: btn.dataset.id,
          title: btn.dataset.title,
          price: Number((btn.dataset.price||'').toString().replace(/\s/g,'')),
          image: btn.dataset.image || ''
        };
        addToCart(item);
        showMiniCart(item);
      });
    });

    // uppdatera badge vid sidladdning
    updateCartBadge();

      //öppen och stängt med musen över cart länken
    const cartLink = document.getElementById('cart-link');
    const mini = document.getElementById('mini-cart');
   if(cartLink && mini){
  cartLink.addEventListener('mouseenter', ()=> {
    const cart = getCart();
    if (cart.length > 0) {
      const lastItem = cart[cart.length - 1]; // om vagnen har varor visar senaste varan
      showMiniCart(lastItem);
    } else {
      mini.classList.remove('show'); // vagnen är tom visar inget
    }
  });

  cartLink.addEventListener('mouseleave', ()=> mini.classList.remove('show'));
}
  });
 document.addEventListener('DOMContentLoaded', () => {
  const cartCounter = document.getElementById('cart-count');
  if (cartCounter && cartCounter.textContent.trim() === '') {
    cartCounter.style.display = 'none';
  } else {
    cartCounter.style.display = 'inline-block';
  }
 });

  // export برای صفحات دیگر مثل shopping.js
  window.CART = { getCart, saveCart, formatSEK, updateCartBadge };
})();
