 document.addEventListener('DOMContentLoaded', () => {
  const cart = CART.getCart();
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.qty), 0); 

  const countEl = document.getElementById('checkout-item-count');
  const totalEl = document.getElementById('checkout-total'); 

  if(countEl) {
    countEl.textContent = `Antal varor: ${itemCount}`;
  }
  if(totalEl) {
    totalEl.textContent = `Totalt: ${CART.formatSEK(totalAmount)}`; 
}  
});