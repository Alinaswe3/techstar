import { elementInViewport } from '$lib/stores/store';

export const setUpSectionObserver = () => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// @ts-ignore
					elementInViewport.set(entry.target.id);
				} else {
					// @ts-ignore
					elementInViewport.set('');
				}
			});
		},
		{
			root: null,
			rootMargin: '0px',
			threshold: 0.1
		}
	);

	const sections = ['#home', '#about', '#skills', '#services', '#reviews'];
	sections.forEach((section) => {
		const sectionElement = document.querySelector(section);
		if (sectionElement) observer.observe(sectionElement);
	});
};
