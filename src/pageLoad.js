function createHomepage() {
    const contentDiv = document.getElementById('content');

    // Create header
    const header = document.createElement('div');
    header.className = 'header';
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Welcome to Our Gourmet Restaurant';
    header.appendChild(headerTitle);

    // Create content
    const content = document.createElement('div');
    content.className = 'content';
    const image = document.createElement('img');
    image.src = 'restaurant homepage.webp';
    image.alt = 'Delicious Dishes at Our Restaurant';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Discover the ultimate dining experience at Our Gourmet Restaurant...';
    
    content.appendChild(image);
    content.appendChild(paragraph);

    // Append to contentDiv
    contentDiv.appendChild(header);
    contentDiv.appendChild(content);
}

export { createHomepage };
