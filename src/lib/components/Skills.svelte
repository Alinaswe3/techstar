<script>
	import Skill from '$lib/components/Skill.svelte';
</script>

<section class="my-16 grid grid-cols-2 justify-items-center gap-12 lg:grid-cols-1">
	<div class="self-center">
		<h4 class="section-heading text-5xl leading-tight lg:text-3xl">
			<span> I am a Web developer. </span><br />
			<span> And I excel at what I do. </span>
		</h4>
		<br />
		<p class="long-text">
			The quick brown fox jumps over the lazy dog. It is the goto line for learning touch tpying. I
			use this line quite often. And It is very helpful. Someone came up with this brillient line
			and help probably a million people
		</p>
	</div>
	<div class="grid grid-cols-2 items-center justify-items-center gap-12">
		<Skill size="140" skill="Html" />
		<Skill size="140" skill="Css" />
		<Skill size="140" skill="Java" />
		<Skill size="140" skill="SQL" />
	</div>
</section>
