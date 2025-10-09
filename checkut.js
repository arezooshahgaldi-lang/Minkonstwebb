 document.addEventListener('DOMContentLoaded', () => {
  const cart = CART.getCart(); // سبد خرید رو بگیر
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0); // جمع تعداد آیتم‌ها
  const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.qty), 0); // جمع مبلغ کل

  const countEl = document.getElementById('checkout-item-count');
  const totalEl = document.getElementById('checkout-total'); 

  if(countEl) {
    countEl.textContent = `Antal varor: ${itemCount}`;
  }
  if(totalEl) {
    totalEl.textContent = `Totalt: ${CART.formatSEK(totalAmount)}`; 
}  
});