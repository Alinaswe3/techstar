<script lang="ts">
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let isNavOpen: boolean = false;
</script>

{#if isNavOpen}
	<!-- `A11y: Non-interactive element <div> should not be assigned mouse or keyboard event listeners.` -->
	<div class="absolute left-0 top-0 z-20 h-full w-full" on:click={() => (isNavOpen = false)}></div>
{/if}
{#if isNavOpen}
	<!-- `A11y: Non-interactive element <ul> should not be assigned mouse or keyboard event listeners.` -->
	<ul
		on:click={() => (isNavOpen = false)}
		transition:slide={{ delay: 100, duration: 200, easing: quintOut, axis: 'x' }}
		class="menu menu-sm absolute left-[1rem] top-[3.8rem] z-30 mt-3 w-40 rounded-btn bg-base-100 p-2 shadow"
	>
		<li><a class="js-smooth" href="#home">Home</a></li>
		<li><a class="js-smooth" href="#about">About</a></li>
		<li><a class="js-smooth" href="#skills">Skills</a></li>
		<li><a class="js-smooth" href="#services">Services</a></li>
		<li><a class="js-smooth" href="#reviews">Reviews</a></li>
	</ul>
{/if}
<nav class="navbar fixed left-0 top-0 z-10 bg-base-100 shadow-2xl">
	<div class="navbar-start">
		<div class="dropdown">
			<button
				tabindex="0"
				class="btn btn-ghost relative hidden lg:block"
				on:click={() => {
					isNavOpen = !isNavOpen;
				}}
			>
				{#if isNavOpen}
					<Icon icon="fontisto:close-a" />
				{:else}
					<Icon class="open" icon="pajamas:hamburger" />
				{/if}
			</button>
		</div>
		<a href="#home" class="js-smooth pl-2 text-xl font-semibold lg:pl-4">TechStar</a>
	</div>
	<div class="navbar-center flex lg:hidden">
		<ul class="menu menu-horizontal px-1">
			<li><a class="js-smooth" href="#home">Home</a></li>
			<li><a class="js-smooth" href="#about">About</a></li>
			<li><a class="js-smooth" href="#skills">Skills</a></li>
			<li><a class="js-smooth" href="#services">Services</a></li>
			<li><a class="js-smooth" href="#reviews">Reviews</a></li>
		</ul>
	</div>
	<div class="navbar-end pr-2">
		<a href="#contact" class="js-smooth btn btn-primary btn-sm">Contact</a>
	</div>
</nav>
