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
    console.log(block);

    block.innerHTML=txt;
    console.log(block.innerHTML);
  };


