
$( document ).ready(function() {

  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

  $('.modal__card').dblclick(function(){
    $('.modal__card').toggleClass('modal__card_active');
  });

  $(document).delegate( ".content__cart", "click", function(event){ 
    event.preventDefault(); 
    $('#overlay').fadeIn(400,
      function(){ 
        $('#modal_form') 
          .css('display', 'block') 
          .animate({opacity: 1, top: '50%'}, 200); 
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa */
  $('#modal_close, #overlay').on('click', function(){ 
    $('#modal_form')
      .animate({opacity: 0, top: '45%'}, 200,  
        function(){ 
          $(this).css('display', 'none');
          $('#overlay').fadeOut(400); 
        }
      );
  });

});


var handlesSlider = document.getElementById('slider-range');
var input0 = document.getElementById('filter__price-min');
var input1 = document.getElementById('filter__price-max');
var inputs = [input0, input1];

noUiSlider.create(handlesSlider, {
  start: [ 70, 400 ],
  step: 210,
  range: {
    'min': [  70 ],
    'max': [ 6000 ]
  }
});

handlesSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
  inputs[handle].value = Math.round(values[handle]);
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

 function price(){

     function getValue() {
       var select = document.getElementById("select");
       var value = select.value;
       return value;
    }

    var goods = document.getElementsByClassName("content__goods-item");
    var goods_txt = [];
    for (var i =0; i<goods.length; i++){
        goods_txt[i] = goods[i].innerHTML;
    }
    
    function sortRule_1(i, ii) { 
      var reg = /(?!<div class="content__description-price">)(\d+\.\d{2})(?!<\/div>)/;
      var price_i = parseFloat(i.match(reg));
      var price_ii = parseFloat(ii.match(reg));
      if (price_i < price_ii) return 1; 
        else if (price_i > price_ii) return -1; 
        else return 0; 
    }
    function sortRule_2(i, ii) { 
      var reg = /(?!<div class="content__description-price">)(\d+\.\d{2})(?!<\/div>)/;
      var price_i = parseFloat(i.match(reg));
      var price_ii = parseFloat(ii.match(reg));
      if (price_i > price_ii) return 1; 
        else if (price_i < price_ii) return -1; 
        else return 0; 
    }
    
    if (getValue()==1){goods_txt.sort(sortRule_1);}
      else{goods_txt.sort(sortRule_2);}
    
    for (var i=0; i<goods_txt.length; i++){
        if ((i+1)%3==0) {
             goods_txt[i] = '<div class="content__goods-item">'+goods_txt[i]+'</div>';}
             else {goods_txt[i] = '<div class="content__goods-item">'+goods_txt[i]+'</div>';}
    }
      
    var txt = goods_txt.join('');
    var block=document.getElementById("goods");

    block.innerHTML=txt;
  };
