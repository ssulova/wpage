document.addEventListener('DOMContentLoaded', () =>
{
    let navbar = document.getElementById('navbar');
    let footer = document.getElementById('footer');

    navbar.innerHTML = `
    <ul>
    <li>
        <a href="index.html">Начало</a>
    </li>
    <li>
        <a href="about.html">За нас</a>
    </li>
    <li>
        <a href="contact.html">Контакти</a>
    </li>
</ul>
 `
footer.innerHTML ='<p>Сълова, 2025</p>';
});
