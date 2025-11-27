import cateringData from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    renderMenu(cateringData);
});

function renderMenu(data) {
    const menuContainer = document.getElementById('menu');

    data.menu.forEach(category => {
        const categorySection = document.createElement('section');
        categorySection.className = 'category-section';

        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.category;

        const productsGrid = document.createElement('div');
        productsGrid.className = 'products-grid';

        category.items.forEach(item => {
            const productCard = createProductCard(item);
            productsGrid.appendChild(productCard);
        });

        categorySection.appendChild(categoryTitle);
        categorySection.appendChild(productsGrid);
        menuContainer.appendChild(categorySection);
    });
}

function createProductCard(item) {
    const card = document.createElement('article');
    card.className = 'product-card';

    // Image handling
    const imageContainer = document.createElement('div');
    imageContainer.className = 'product-image-container';

    const customImageMap = {
        "Alfajores de Maicena": "alfajormaicena.png",
        "Salchichón de Chocolate": "salchichonchocolate.png",
        "Tortas Saladas": "tortasalada.png",
        "Pizzetas con Muzzarella": "pizzetasmuzzarela.png",
        "Pizzetas con gusto a elección": "pizzetascongustos.png"
    };

    let imageName;
    if (customImageMap[item.name]) {
        imageName = customImageMap[item.name];
    } else {
        // Default slugify: lowercase, remove accents, remove spaces
        imageName = item.name.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '') + ".png";
    }

    const img = document.createElement('img');
    img.src = `imagenes/${imageName}`;
    img.alt = item.name;
    img.className = 'product-image';

    // Fallback if image fails to load
    img.onerror = function () {
        this.style.display = 'none';
        imageContainer.innerHTML = '<div class="card-image-placeholder"><i class="fa-solid fa-utensils"></i></div>';
    };

    imageContainer.appendChild(img);

    const content = document.createElement('div');
    content.className = 'card-content';

    const name = document.createElement('h3');
    name.className = 'product-name';
    name.textContent = item.name;

    const price = document.createElement('div');
    price.className = 'product-price';
    price.textContent = `${item.currency} ${item.price}`;

    content.appendChild(name);
    content.appendChild(price);

    if (item.description) {
        const desc = document.createElement('p');
        desc.className = 'product-description';
        desc.textContent = item.description;
        content.appendChild(desc);
    }

    // Handle specific lists (options, ingredients, flavors, contents, varieties, toppings)
    const detailsContainer = document.createElement('div');
    detailsContainer.className = 'product-details';

    if (item.options) createList(detailsContainer, 'Opciones:', item.options);
    if (item.ingredients) createList(detailsContainer, 'Ingredientes:', item.ingredients);
    if (item.flavors) createList(detailsContainer, 'Sabores:', item.flavors);
    if (item.contents) createList(detailsContainer, 'Incluye:', item.contents);
    if (item.toppings) createList(detailsContainer, 'Gustos:', item.toppings);

    // Special handling for "varieties" which is an array of objects
    if (item.varieties) {
        const ul = document.createElement('ul');
        const title = document.createElement('strong');
        title.textContent = 'Variedades:';
        detailsContainer.appendChild(title);

        item.varieties.forEach(v => {
            const li = document.createElement('li');
            let text = v.name;
            if (v.ingredients) {
                text += ` (${v.ingredients.join(', ')})`;
            }
            li.textContent = text;
            ul.appendChild(li);
        });
        detailsContainer.appendChild(ul);
    }

    // Upgrades
    if (item.upgrades) {
        const ul = document.createElement('ul');
        item.upgrades.forEach(u => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>Opción:</strong> ${u.description} (+ ${item.currency} ${u.price})`;
            ul.appendChild(li);
        });
        detailsContainer.appendChild(ul);
    }

    content.appendChild(detailsContainer);

    // WhatsApp Button
    const waLink = document.createElement('a');
    waLink.className = 'btn-whatsapp';
    const message = encodeURIComponent(`Hola, me interesa: ${item.name}`);
    waLink.href = `https://wa.me/59898481748?text=${message}`;
    waLink.target = '_blank';
    waLink.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Pedir por WhatsApp';

    content.appendChild(waLink);

    card.appendChild(imageContainer);
    card.appendChild(content);

    return card;
}

function createList(container, titleText, items) {
    const title = document.createElement('strong');
    title.textContent = titleText;
    container.appendChild(title);

    const ul = document.createElement('ul');
    items.forEach(i => {
        const li = document.createElement('li');
        li.textContent = i;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}
