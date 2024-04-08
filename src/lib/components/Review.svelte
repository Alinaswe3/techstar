<script lang="ts">
	export let serviceOffered: string = 'unknown';
	export let clientName: string = 'unknown';
	export let clientImg: string = '';
</script>

<div
	class="carousel-item relative flex w-1/3 flex-col gap-10 rounded-2xl border-2 border-primary bg-base-100 px-8 py-16 lg:w-1/2 sm:w-full"
>
	<div class="flex gap-[14px]">
		<div class="h-20 w-20 overflow-hidden rounded-full">
			<img src={clientImg} alt="Client" />
		</div>
		<div class="flex flex-col gap-[6px]">
			<p class="text-lg uppercase tracking-wider text-primary">{serviceOffered}</p>
			<p class="font-serif text-lg font-semibold tracking-wide">{clientName}</p>
		</div>
	</div>
	<div class="long-text">
		<slot />
	</div>
	<svg
		class="absolute bottom-[10%] right-[20%]"
		xmlns="http://www.w3.org/2000/svg"
		width="67"
		height="58"
		viewBox="0 0 67 58"
		fill="none"
	>
		<path
			d="M59.9471 0H43.41C39.9863 0 37.2086 2.77772 37.2086 6.20143V22.7386C37.2086 26.1623 39.9863 28.94 43.41 28.94H53.7457V37.2086C53.7457 41.7692 50.0378 45.4771 45.4771 45.4771H44.4436C42.7253 45.4771 41.3428 46.8595 41.3428 48.5779V54.7793C41.3428 56.4976 42.7253 57.88 44.4436 57.88H45.4771C56.8981 57.88 66.1486 48.6295 66.1486 37.2086V6.20143C66.1486 2.77772 63.3708 0 59.9471 0ZM22.7386 0H6.20143C2.77772 0 0 2.77772 0 6.20143V22.7386C0 26.1623 2.77772 28.94 6.20143 28.94H16.5371V37.2086C16.5371 41.7692 12.8292 45.4771 8.26857 45.4771H7.235C5.51669 45.4771 4.13428 46.8595 4.13428 48.5779V54.7793C4.13428 56.4976 5.51669 57.88 7.235 57.88H8.26857C19.6895 57.88 28.94 48.6295 28.94 37.2086V6.20143C28.94 2.77772 26.1623 0 22.7386 0Z"
			fill="#ABAEB0"
			fill-opacity="0.1"
		/>
	</svg>
</div>
