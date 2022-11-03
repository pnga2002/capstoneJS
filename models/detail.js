var token_cybersoft = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg';
(function getProductDetail(){
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    var promise = axios({
        url :  `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method:'GET',
        headers:{
            TokenCybersoft: token_cybersoft
        }
    })
    promise.then(function(res){
        console.log(res.data.content);
        var product = res.data.content;
        document.querySelector('#hinhAnh').src = product.image;
        document.querySelector('#name').innerHTML = product.name;
        document.querySelector('#mota').innerHTML = product.description;
        document.querySelector('#price').innerHTML = product.price;
        // console.log(product.size)
        renderSize(product.size)
    })
    promise.catch(function(err){
        console.log(err)
    })
})();

function renderSize(arrSize){
    var contentHTML='';
    for(var i=0;i<arrSize.length;i++){
        contentHTML+=`
            <button class="btn mx-2 ">${arrSize[i]}</button>
        `;
    }
    document.querySelector('#btnSize').innerHTML = contentHTML;
    // console.log(contentHTML)
}

(function getAllProduct(){
    
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
        headers:{
            TokenCybersoft: token_cybersoft
        }
    })
    promise.then(function(res){
        console.log(res.data.content)
        //gọi hàm để tạo ui
        renderProductCard(res.data.content);
    })
    promise.catch(function(err){
        console.log(err)
    })
})();
function renderProductCard(arrProduct){
    var contentHTML = '';
    for(var i = 0;i<6;i++){
        
        let random = Math.floor(Math.random() * 19)
        var product = arrProduct[random];
        contentHTML +=`
        <div class="col-lg-4 realateItem">
            <div class="card">
              <img id="hinhAnh" src="${product.image}" alt="">
              <div class="card-body">
                <p id="name">${product.name}</p>
                <p id="mota">${product.description.length >100?product.description.substr(0,100)+'...':product.description}.</p>
                <div id="buttons" class="row">
                  <a class="col-6 btn btnBuy" href="./detail.html?id=${product.id}">Buy now</a>
                  <a class="col-6 btn btnPrice">${product.price}$</a>
                </div>
              </div>
            </div>
          </div>
        `;
    }
    document.querySelector('#product-list').innerHTML = contentHTML;
}
function plusAmout(){
    var number = Number(document.querySelector('#num').innerHTML);
    document.querySelector('#num').innerHTML =number+1;
};
function minusAmout(){
    var number = Number(document.querySelector('#num').innerHTML);
    if(number>1){
        document.querySelector('#num').innerHTML =number-1;
    }
};