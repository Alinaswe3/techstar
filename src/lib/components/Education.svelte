<script lang="ts">
	export let schoolName: string = 'unknown';
	export let level: string = 'unknown';
</script>

<div class="flex gap-8">
	<div class="relative h-14 w-14">
		<svg
			class="absolute-center"
			xmlns="http://www.w3.org/2000/svg"
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
		>
			<circle cx="18" cy="18" r="17" stroke="#00E472" stroke-width="2" />
		</svg>
		<svg
			class="absolute-center"
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
		>
			<circle cx="7" cy="7" r="7" fill="#00E472" />
		</svg>
	</div>
	<div>
		<h4 class="my-3 text-lg text-primary">{schoolName}</h4>
		<p class="flex flex-col gap-2">
			<span class="text-3xl tracking-wide">{level}</span>
			<span class="long-text text-base">
				<slot />
			</span>
		</p>
	</div>
</div>
