<script>
const hamburger = document.querySelector('.hamburger');
const menu = document.getElementById('menu');
const menuClose = document.querySelector('.menu-close');
const menuOverlay = document.getElementById('menu-overlay');

if (hamburger && menu && menuClose && menuOverlay) {
const openMenu = () => {
document.body.classList.add('menu-open');
hamburger.classList.add('active');
hamburger.setAttribute('aria-expanded', 'true');
menu.setAttribute('aria-hidden', 'false');
menuClose.focus();
};

const closeMenu = () => {
document.body.classList.remove('menu-open');
hamburger.classList.remove('active');
hamburger.setAttribute('aria-expanded', 'false');
menu.setAttribute('aria-hidden', 'true');
};

hamburger.addEventListener('click', () => {
if (document.body.classList.contains('menu-open')) {
closeMenu();
return;
}

openMenu();
});

menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', (event) => {
if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
closeMenu();
hamburger.focus();
}
});
}
</script>