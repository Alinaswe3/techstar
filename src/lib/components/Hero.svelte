<header class="grid grid-cols-[1.1fr_0.9fr] items-center gap-6 lg:grid-cols-1 lg:gap-16">
	<div class="flex flex-col gap-6">
		<h2 class="section-heading text-5xl leading-tight md:text-3xl">
			I have lots of things to prove to myself. One is I can live my life <strong>fearlessly</strong
			>
		</h2>
		<p class="text-2xl text-secondary-content md:text-xl">
			Web Developer, Problem solver, and a Hiker
		</p>
		<div class="mt-4 flex gap-4">
			<button class="btn btn-primary btn-sm"> Learn more </button>
			<button class="btn btn-outline btn-primary btn-sm"> Contact </button>
		</div>
	</div>
	<div class="border-animate">
		<img
			class="h-full w-full"
			src="https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_1280.jpg"
			alt="Hero image"
		/>
	</div>
</header>

<style>
	header {
		z-index: -1;
		min-height: 16em;
		margin-top: -2rem;
		padding: 3rem 0.5rem;
		height: calc(100vh - 6rem);
	}

	.border-animate {
		position: relative;
		width: 100%;
		height: auto;
		background: linear-gradient(0deg, #000, #272727);
	}

	.border-animate:before,
	.border-animate:after {
		content: '';
		position: absolute;
		left: -2px;
		top: -2px;
		background: linear-gradient(
			45deg,
			#fb0094,
			#0000ff,
			#00ff00,
			#ffff00,
			#ff0000,
			#fb0094,
			#0000ff,
			#00ff00,
			#ffff00,
			#ff0000
		);
		background-size: 400%;
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		z-index: -1;
		animation: steam 60s linear infinite;
	}

	@keyframes steam {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 400% 0;
		}
		100% {
			background-position: 0 0;
		}
	}

	.border-animate:after {
		filter: blur(50px);
	}
</style>
