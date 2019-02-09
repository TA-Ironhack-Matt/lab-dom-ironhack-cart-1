window.onload = function(){

  var deleteButton = document.getElementsByClassName("delete")[0];
  var calcTotalBtn = document.getElementById("calculate-total-btn");
  var price = document.getElementsByClassName("price")[0].innerHTML;
  var quant = document.getElementsByClassName("q")[0].value;
  var subtotal = document.getElementsByClassName("subtotal")[0];
  
  
  calcTotalBtn.onclick = function(){
    var quantities = document.getElementsByClassName("q");
    var prices = document.getElementsByClassName("price");
    
    //total of product quantity * price
    var subtotal = document.getElementsByClassName("subtotal"); 
   
    //total of all products in the basket
    var basketTotal = document.getElementById("baskettotal"); 
    
    //counter
    var theTotal = "";

    for (let i = 0; i < quantities.length; i++) {
      subtotal[i].innerHTML = (quantities[i].value * prices[i].innerHTML)
      theTotal += (quantities[i].value * prices[i].innerHTML);
    }
    basketTotal.innerHTML = theTotal;
  }

  function deleteRow(e){
    var productRow = e.currentTarget.parentNode.parentNode.parentNode
    theCartItems.removeChild(productRow);
  }

  deleteButton.onclick = deleteRow;
  

  // ADD products to the basket 
  
  var addItemButton = document.getElementById("addItem");
  var theCartItems = document.getElementById("shoppingItems");

  addItemButton.onclick = function(){
    var newItemPrice = document.getElementById("priceItem").value;
    var newItemName = document.getElementById("nameItem").value;

    theCartItems.insertAdjacentHTML("beforeend",`
        <div class="row">
        <ul>
          <li class="name">${newItemName}</li>
          <li>$<span class="price">${newItemPrice}</span></li>
          <li><input class="q" type="number" value="0" name="" id=""></li>
          <li>$<span class="subtotal">0</span></li>
          <li><button class="delete">Delete</button></li>
        </ul>
        </div>
      `)

      var allButtons = document.getElementsByClassName("delete")
      var lastDeleteButton = allButtons[allButtons.length-1]
      
      lastDeleteButton.onclick = deleteRow
  } 
};
