<script>
	import Education from '$lib/components/Education.svelte';
</script>

<section class="grid grid-cols-2 gap-12 lg:grid-cols-1">
	<div class="flex flex-col gap-8">
		<h2 class="section-title">more about me</h2>
		<h3 class="mb-2 font-serif text-5xl">Educations</h3>
		<div class="relative flex flex-col gap-8">
			<div class="absolute left-[3.5%] top-[1.3rem] h-full w-[3px] bg-primary"></div>
			<Education level="High School" schoolName="South Madarsha S.S. High School (2005 - 2010)">
				The quick brown fox jumps over the lazy dog. It is the goto line for learning touch typing
			</Education>
			<Education level="College" schoolName="South Madarsha S.S. High School (2005 - 2010)">
				The quick brown fox jumps over the lazy dog. It is the goto line for learning touch typing
			</Education>
			<Education level="University" schoolName="South Madarsha S.S. High School (2005 - 2010)">
				The quick brown fox jumps over the lazy dog. It is the goto line for learning touch typing
			</Education>
		</div>
	</div>
	<div
		class="mt-20 h-4/5 w-auto max-w-96 self-center justify-self-center overflow-hidden rounded-xl lg:mt-0"
	>
		<img
			alt="Tony Chingore"
			src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		/>
	</div>
</section>
