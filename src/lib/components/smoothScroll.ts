export const addSmoothScroll = (cssClassSelector: string) => {
	const links = document.querySelectorAll(cssClassSelector);

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

export const onSmoothScroll = (e) => {
	e.preventDefault();

	const href = e.target.getAttribute('href');
	const target = document.querySelector(href);

	target.scrollIntoView({
		behavior: 'smooth',
		block: 'center',
		inline: 'nearest'
	});
};
