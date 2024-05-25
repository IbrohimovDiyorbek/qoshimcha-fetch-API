let cards = document.querySelector(".cards")

fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(products => createCards(products))
    .catch(error => console.error('Error fetching :', error));

function createCards(products) {
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add("card");

        let id = document.createElement("h2");
        id.classList.add("idNumber");
        id.textContent = `id: ${product.id}`

        let titleProdduct = document.createElement("h2");
        titleProdduct.classList.add("title");
        titleProdduct.textContent = `title: ${product.title}`

        let descriptionProduct = document.createElement("p");
        descriptionProduct.classList.add("description");     
        descriptionProduct.textContent = `description: ${product.description}`

        let price = document.createElement("p");
        price.classList.add("price");
        price.textContent = `price: ${product.price}`

        card.append(id, titleProdduct, descriptionProduct, price);
        cards.appendChild(card);
    })
}