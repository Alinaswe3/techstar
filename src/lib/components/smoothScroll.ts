export const onSmoothScroll = (e: any) => {
	e.preventDefault();

	const href = e.target.getAttribute('href');
	const target = document.querySelector(href);

	if (target)
		target.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'nearest'
		});
};

export const addSmoothScroll = (cssClassSelector: string) => {
	const links = document.querySelectorAll(cssClassSelector);

	links.forEach((link) => {
		link.addEventListener('click', onSmoothScroll);
	});
};
