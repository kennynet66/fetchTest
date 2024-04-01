const container = document.getElementById('container');
let productArr = [];

window.onload = ()=>{
    fetchProducts();
}

async function fetchProducts(){
    const data = await fetch('https://fakestoreapi.com/products', {
        method: 'GET'
    })

    const products = await data.json()

    console.log(products);

    products.forEach(product => productArr.push(product))

    displayProducts();
}

function displayProducts(){
    productArr.forEach((product) =>{
        let card = document.createElement('div');
        card.id = 'card';
        
        let image = document.createElement('img');
        image.src = product.image
        image.id = 'product-img'

        let title = document.createElement('h2');
        title.className = 'title'
        title.textContent = product.title

        // let desc = document.createElement('p')
        // desc.className = "description";
        // desc.textContent = product.description

        let addToCartBtn = document.createElement('button');
        addToCartBtn.id = 'add-to-cart';
        addToCartBtn.textContent = 'View item';
        addToCartBtn.addEventListener('click', ()=>{
            console.log(product);
            window.location.href = 'singleproduct.html?id=' + `${product.id}`
        })

        card.appendChild(image);
        card.appendChild(title);
        // card.appendChild(desc);
        card.appendChild(addToCartBtn);

        container.appendChild(card);
    })
}