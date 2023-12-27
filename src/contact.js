export function loadContact() {
    const contact = document.createElement('div');
    contact.className = 'tabcontent';
    contact.innerHTML = `
        <h1>Contact Us</h1>
        <p>We love to hear from our guests! Whether you have a question about our menu, want to make a reservation, or need to plan a special event, our team is ready to assist you.</p>
        <p><strong>Phone:</strong> 123-456-7890<br>
        <strong>Email:</strong> contact@labellacucina.com<br>
        <strong>Address:</strong> 123 Gourmet Street, Foodie City, FC 12345</p>
        <p>Follow us on social media for the latest news and exclusive offers. We're on Facebook, Instagram, and Twitter. Join our community and be part of the La Bella Cucina family.</p>`;
    return contact;
}


