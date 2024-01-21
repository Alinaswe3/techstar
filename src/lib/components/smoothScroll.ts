export const smoothScroll = () => {
	const links = document.querySelectorAll('.js-smooth');

	links.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();

			const href = link.getAttribute('href');
			const target = document.querySelector(href);

			target.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'nearest'
			});
		});
	});
};
