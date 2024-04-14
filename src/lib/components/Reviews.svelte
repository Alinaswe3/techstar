<script>
	import Review from '$lib/components/Review.svelte';
</script>

<section id="reviews" class="mt-10 w-full overflow-hidden">
	<h3 class="section-title">what people are saying</h3>
	<h2 class="section-heading mt-8">Clients</h2>
	<div class="carousel carousel-center w-full gap-4 space-x-8 rounded-box bg-base-100 px-6 py-4">
		<Review clientImg="/images/chama.webp" clientName="Chama Musonda" serviceOffered="Customer">
			I recently purchased the Dell XPS laptop from you, and I'm thoroughly impressed with its high
			performance. The sleek design, powerful specs, and vibrant display make it a top-notch choice
			for both work and entertainment. I Highly recommend TonyStar!
		</Review>
		<Review clientImg="/images/mary.webp" clientName="Maria M. Patel" serviceOffered="Customer">
			I was impressed by the excellent selection, service, and overall experience at this small
			business. I highly recommend it!
		</Review>
		<Review clientImg="/images/isabel.webp" clientName="Isabel Cooke" serviceOffered="Customer">
			I love the iphone 11, the storage and all, the camera is great I have no complaints on
			anything, I'd definitely recommend you. You always communicate to check if the phones are
			alright, and if I'm satisfied with it
		</Review>
		<Review
			clientImg="/images/tasheni.webp"
			clientName="Tasheni B. Chibwe"
			serviceOffered="Customer"
		>
			Tonystar Electronics lives up to their word. They deliver within their situated number of
			days, and their products are always authentic and of high quality. I always buy from them and
			have no regrets
		</Review>
	</div>
</section>

<style>
	.responsive-grid {
		justify-content: space-between;
		overflow: hidden;
		margin: 2rem auto;
		padding: 2.4rem 5px;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, max-content));
		gap: 2rem;
	}
</style>
