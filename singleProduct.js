const container = document.querySelector('.container');

let searchParams = new URLSearchParams(window.location.search);
let id = searchParams.get('id');

async function getSingleProduct(){
    const data = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'GET'
    });

    const product = await data.json();

    console.log(product);

    let image = document.createElement('img');
    image.className = 'product-img';
    image.src= product.image

    let descrs = document.createElement('div');
    descrs.className = 'descriptions';

    let price = document.createElement('h1');
    price.textContent = `$${product.price}`

    let title = document.createElement('h1');
    title.textContent = product.title;

    let descr = document.createElement('p');
    descr.textContent = product.description;

    let button = document.createElement('button');
    button.textContent = 'Add to cart';

    descrs.appendChild(title);
    descrs.appendChild(descr);
    descrs.appendChild(price);
    descrs.appendChild(button);

    container.appendChild(image);
    container.appendChild(descrs);
}



getSingleProduct()