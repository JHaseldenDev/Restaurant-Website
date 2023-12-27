export function loadMenu() {
    const menu = document.createElement('div');
    menu.className = 'tabcontent menu';
    menu.innerHTML = `
    <h1>Our Exquisite Menu</h1>

    <section class="menu-category">
        <h2>Starters</h2>
        <div class="menu-item">
            <img src="bruschetta.jpeg" alt="Bruschetta" class="menu-image">
            <div class="item-description">
                <h3>Bruschetta Classica - $8.00</h3>
                <p>Toasted bread topped with fresh diced tomatoes, basil, garlic, and extra virgin olive oil.</p>
            </div>
        </div>
        <div class="menu-item">
            <img src="caprese.jpeg" alt="Caprese Salad" class="menu-image">
            <div class="item-description">
                <h3>Caprese Salad - $10.00</h3>
                <p>Slices of fresh mozzarella and tomatoes, basil, and drizzled with balsamic glaze.</p>
            </div>
        </div>
    </section>

    <section class="menu-category">
        <h2>Main Courses</h2>
        <div class="menu-item">
            <img src="pizza.jpeg" alt="Margherita Pizza" class="menu-image">
            <div class="item-description">
                <h3>Margherita Pizza - $14.00</h3>
                <p>Classic pizza with fresh mozzarella, tomatoes, basil, and a rich tomato sauce</p>
            </div>
        </div>
        <div class="menu-item">
            <img src="spaghetti.jpeg" alt="Spaghetti Carbonara" class="menu-image">
            <div class="item-description">
                <h3>Spaghetti Carbonara - $16.00</h3>
                <p>Spaghetti in a creamy sauce with pancetta, parmesan cheese, and a touch of black pepper.</p>
            </div>
        </div>
        <div class="menu-item">
            <img src="salmon.jpeg" alt="Grilled Salmon" class="menu-image">
            <div class="item-description">
                <h3>Grilled Salmon - $20.00</h3>
                <p>Perfectly grilled salmon served with a side of seasoned vegetables.</p>
            </div>
        </div>
    </section>

    <section class="menu-category">
        <h2>Desserts</h2>
        <div class="menu-item">
            <img src="tiramisu.jpeg" alt="Tiramisu" class="menu-image">
            <div class="item-description">
                <h3>Tiramisu - $9.00</h3>
                <p>Classic Italian dessert with layers of mascarpone cheese, ladyfingers, and a dusting of cocoa powder.</p>
            </div>
        </div>
        <div class="menu-item">
            <img src="gelato.jpeg" alt="Gelato Trio" class="menu-image">
            <div class="item-description">
                <h3>Gelato Trio - $7.00</h3>
                <p>A selection of three house-made gelatos. Choose your flavors!</p>
            </div>
        </div>
    </section>

    <section class="menu-category">
        <h2>Beverages</h2>
        <div class="menu-item">
            <img src="wine.jpeg" alt="Glass of red wine" class="menu-image">
            <div class="item-description">
                <h3>Italian Red Wine - $8.00/glass</h3>
                <p>A glass of our finest Italian red wine.</p>
            </div>
        </div>
        <div class="menu-item">
            <img src="espresso.jpeg" alt="espresso drink" class="menu-image">
            <div class="item-description">
                <h3>Espresso - $3.00</h3>
                <p>Rich and aromatic traditional Italian espresso.</p>
            </div>
        </div>
    </section>
`;

return menu;
}

