export function loadHome() {
    const home = document.createElement('div');
    home.className = 'tabcontent';
    home.innerHTML = `
        <h1>Welcome to La Bella Cucina</h1>
        <p>Welcome to La Bella Cucina, where culinary excellence meets the charm of a cozy atmosphere. Our restaurant offers a unique blend of traditional flavors and modern gastronomy, making each dish an unforgettable experience. Join us for a journey of exquisite tastes, where each meal is not just food, but a story told through spices and aromas.</p>
        <img src="restaurant homepage.webp" alt="Cozy Restaurant Interior">
        <p>Indulge in our carefully curated menu featuring fresh, locally-sourced ingredients. Whether you're here for a romantic dinner, a family gathering, or a casual meal with friends, our attentive staff and ambient setting ensure a memorable dining experience. Don't forget to ask about our chef's specials!</p>`;
    return home;
}

