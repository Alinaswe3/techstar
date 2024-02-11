export const onSmoothScroll = (e: any) => {
	const href = e.target.getAttribute('href');
	const target = document.querySelector(href);

	target.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
		inline: 'nearest'
	});
};
