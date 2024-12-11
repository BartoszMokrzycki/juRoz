const links = document.querySelectorAll('nav a');
const mainLogo = document.querySelector('.mainLogo');
const nav = document.querySelector('nav');
const navDesk = document.querySelector('.nav__desktop');
const navMobile = document.querySelector('.nav__mobile');

const arrDown = document.querySelector('.scroll-button');

const hideNav = () => {
	navDesk.style.top = '-150px';
	navMobile.style.top = '-150px'
};

const showNav = () => {
	navDesk.style.top = '0'
	navMobile.style.top = '0'
};

const hideNavByScroll = () => {
	const scrollPosition = window.screenY || document.documentElement.scrollTop;
	const triggerPostionPC = 700;

	if (scrollPosition >= triggerPostionPC) {
		hideNav();
	} else if (
		navDesk.style.top === '-150px' &&
		scrollPosition <= triggerPostionMobile
	) {
		showNav()
	}
};

arrDown.addEventListener('click', hideNav);
window.addEventListener('scroll', hideNavByScroll);
