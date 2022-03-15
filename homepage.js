$.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product',function(data){

    console.log(data);
})

var productId =3;
$.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/'+productId,function(data){
    console.log("prdouct description",data);
})