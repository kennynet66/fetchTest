const container = document.getElementById('container');
let productArr = [];

window.onload = ()=>{
    fetchProducts();
}

async function fetchProducts(){
    const data = await fetch('http://localhost:300/products/all-products', {
        method: 'GET'
    })

    const products = await data.json()

    console.log(products);

    products.products.forEach(product => productArr.push(product))

    displayProducts();
}

function displayProducts(){
    productArr.forEach((product) =>{
        let card = document.createElement('div');
        card.id = 'card';
        
        let image = document.createElement('img');
        image.src = product.productImage
        image.id = 'product-img'

        let title = document.createElement('h2');
        title.className = 'title'
        title.textContent = product.productName

        let desc = document.createElement('p')
        desc.className = "description";
        desc.textContent = product.description

        let addToCartBtn = document.createElement('button');
        addToCartBtn.id = 'add-to-cart';
        addToCartBtn.textContent = 'View item';
        addToCartBtn.addEventListener('click', ()=>{
            window.location.href = `singleproduct/${product.productId}`
        })

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(addToCartBtn);

        container.appendChild(card);
    })
}