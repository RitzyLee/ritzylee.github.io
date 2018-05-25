$(document).ready(function(){//THE CLOSING brakets are at the end
    //GD page - purchases
    function multNums(){
      var num1= document.getElementById('num1').value;
      var num2= document.getElementById('num2').value;
      var total = (parseInt(num1) * parseInt(num2));
        document.getElementById('total').innerHTML = total;
      if (total<1000) {
        document.getElementById('thanks').innerHTML = 'Thank you for your purchase'
      }
      else {
        document.getElementById('thanks').innerHTML = 'Come back again!'
      }
    }

    //for My account page
    var stuff=["paintings","stain glass","dresses","cakes"]
    for(var i = 0; i < stuff.length; i++){
      console.log(stuff[i]);
      $('#js-loop').append('<li>', + stuff[i] + '<li>');
    }
    $(".demo").click(function(){
    $(this).hide(200);
    });
})//DO NOT DELETE: this closes the document.ready
