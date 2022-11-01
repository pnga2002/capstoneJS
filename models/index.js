(function callApiProduct() {
    let productItem = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseType: 'JSON'
    })
    productItem.then((res) => {
        let arrayProduct = res.data.content;
        renderProduct(arrayProduct);

        function random1() {
            let random = Math.floor(Math.random() * 19)
            document.querySelector('.pro-1').setAttribute('src', `${arrayProduct[random].image}`)
            document.querySelector('.product-desc1 h3').innerHTML = arrayProduct[random].name;
            document.querySelector('.product-desc1 p').innerHTML = arrayProduct[random].shortDescription;
            console.log(arrayProduct[random].shortDescription)
        }
        function random2() {
                let random = Math.floor(Math.random() * 19)
                document.querySelector('.pro-2').setAttribute('src', `${arrayProduct[random].image}`)
                document.querySelector('.product-desc2 h3').innerHTML = arrayProduct[random].name;
                document.querySelector('.product-desc2 p').innerHTML = arrayProduct[random].shortDescription;
                console.log(arrayProduct[random].shortDescription)
         }

         function random3() {
                let random = Math.floor(Math.random() * 19)
                document.querySelector('.pro-3').setAttribute('src', `${arrayProduct[random].image}`)
                document.querySelector('.product-desc3 h3').innerHTML = arrayProduct[random].name;
                document.querySelector('.product-desc3 p').innerHTML = arrayProduct[random].shortDescription;
                console.log(arrayProduct[random].shortDescription)
        }
        random1(
        )
        random2()
        random3()



    })


})()

const renderProduct = (arrProduct) => {
    let contentProduct = arrProduct.reduce((contentHTML, item) => {
        contentHTML += `
        <div class="pruduct-item col-4 mt-2">
        <div class="card text-start">
            <img class="card-img-top" src=${item.image} alt="Title">
            <div class="card-body">
                <h4 class="card-title">${item.name}</h4>
                <p class="card-text">${item.shortDescription
            }</p>

            </div>
            <div class="card-bottom">
                <button class="btn btn-buyitem">
                    Buy now
                </button>
                <div class="price-pruduct">
                    <div class="price1">${item.price}$</div>
                </div>
            </div>
        </div>
    </div>
        `
        return contentHTML
    }, '')
    document.querySelector('.product-wrap').innerHTML = contentProduct;
}


