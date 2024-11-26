document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const footer = document.getElementById('footer');

    navbar.innerHTML =
        `<ul>
            <li><a href="index.html">Начало</a></li>
            <li><a href="about.html">За нас</a></li>
            <li><a href="contact.html">Контакти</a></li>
        </ul>
    `;

    footer.innerHTML = '<p>&copy; 2024 Примерен сайт</p>';
});
