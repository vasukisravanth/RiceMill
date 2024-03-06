function incrementQuantity(index) {
    var quantitySpan = document.getElementById('quantity' + index);
    var currentQuantity = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = currentQuantity + 1;
  }
  
  function decrementQuantity(index) {
    var quantitySpan = document.getElementById('quantity' + index);
    var currentQuantity = parseInt(quantitySpan.textContent);
    if (currentQuantity > 1) {
      quantitySpan.textContent = currentQuantity - 1;
    }
  }