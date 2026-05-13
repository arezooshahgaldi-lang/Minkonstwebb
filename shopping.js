// shopping.js 
document.addEventListener('DOMContentLoaded', ()=>{
  const list = document.getElementById('cart-list');
  const totalEl = document.getElementById('cart-total');
  const clearBtn = document.getElementById('clear-cart');

  function render(){
    const cart = CART.getCart();
    if(cart.length===0){
      list.innerHTML = '<p>Din kundvagn är tom.</p>';
      totalEl.textContent = '';
      return;
    }
    let total = 0;
    list.innerHTML = cart.map((it, idx)=>{
      const line = (it.price||0)*(it.qty||1); 
       
      total += line;
      return `
        <div class="cart-row" style="display:flex;align-items:center;gap:12px;margin:10px 0;">
          <img src="${it.image}" alt="${it.title}" style="width:72px;height:72px;object-fit:cover;border-radius:8px;">
          <div style="flex:1;">
            <strong>${it.title}</strong><br>
            <small>${it.qty||1} × ${CART.formatSEK(it.price||0)}</small>
          </div>
          <div style="min-width:110px; text-align:right;">${CART.formatSEK(line)}</div>
          <button data-idx="${idx}" class="remove">Ta bort</button>
        </div>
      `;
    }).join('');
    totalEl.textContent = 'Totalt: ' + CART.formatSEK(total);

    list.querySelectorAll('.remove').forEach(btn=>{
      btn.onclick = ()=>{
        const i = Number(btn.dataset.idx);
        const cart = CART.getCart();
        cart.splice(i,1);
        CART.saveCart(cart);
        CART.updateCartBadge?.();
        render();
      };
    });
  }

  clearBtn.onclick = ()=>{
    localStorage.removeItem('cart');
    CART.updateCartBadge?.();
    render();
  };

  render();
});
