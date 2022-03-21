$(document).ready(function(){
    var productList = window.localStorage.getItem('product-list');
    productList = productList === null || productList === '' ? [] : productList;
    productList = productList.length > 0 ? JSON.parse(productList) : [];

    var totalCount=0;
    for(var i=0; i<productList.length; i++) {
        totalCount = totalCount + productList[i].count;
    }

    $('#cart-count').html(totalCount);

    $('.slide').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 3
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
    });

function createProductCard(data){
    var mainDiv = document.createElement('div');
    mainDiv.className = 'product-card'
    
    var productLink = document.createElement('a');
    productLink.href = '/product.html?p='+data.id;
    var productImage = document.createElement('img');
    productImage.className='product-image';
    productImage.src = data.preview;
    productImage.alt = data.name + ' Pic';

    productLink.appendChild(productImage);

    var innerDiv = document.createElement('div');
    innerDiv.className='product-meta';

    var productName = document.createElement('h4');
    var productNameText = document.createTextNode(data.name);
    productName.appendChild(productNameText);

    var productBrand = document.createElement('h5');
    var productBrandText = document.createTextNode(data.brand);
    productBrand.appendChild(productBrandText);

    var productPrice = document.createElement('p');
    var productPriceText = document.createTextNode('Rs ' + data.price);
    productPrice.appendChild(productPriceText);

    innerDiv.appendChild(productName);
    innerDiv.appendChild(productBrand);
    innerDiv.appendChild(productPrice);

    mainDiv.appendChild(productLink);
    mainDiv.appendChild(innerDiv);
    console.log(mainDiv);

    return mainDiv;

}

$.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product', function(data, status) {
      var response = data;

      for(var i=0; i<response.length; i++) {
        if(response[i].isAccessory) {
          $('#accessories-grid').append(createProductCard(response[i]))
        } else {
          $('#clothing-grid').append(createProductCard(response[i]))
        }
      }
    })
// var productId =3;
// $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/'+productId,function(data){
//     console.log("prdouct description",data);
// })
})
