<script>
	import Education from '$lib/components/Education.svelte';
</script>

<section class="grid grid-cols-2 gap-12 lg:grid-cols-1">
	<div class="flex flex-col gap-8">
		<h2 class="section-title">more about me</h2>
		<h3 class="section-heading">Educations</h3>
		<div class="relative flex flex-col gap-8">
			<div class="absolute left-[16px] top-[22px] h-full w-[3px] bg-primary"></div>
			<Education level="University" schoolName="Mulungushi University (2021 - present)">
				Third-year computer science student on the path to a bachelor's degree.
			</Education>
			<Education level="High School" schoolName="Northmead Secondary School (2015 - 2019)">
				Graduated high school, and earned a full school certificate on my first attempt
			</Education>
		</div>
	</div>
	<div
		class="mt-20 h-4/5 w-auto max-w-96 self-center justify-self-center overflow-hidden rounded-xl lg:mt-0"
	>
		<img alt="Tony Chingore" src="/images/tony.jpg" />
	</div>
</section>
