<script lang="ts">
	import toast from 'svelte-french-toast';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import emailjs from '@emailjs/browser';

	let isLoading: boolean = false;
	const PUBLIC_KEY: string = 'Zrc82KiBAnh68Ox84';
	const SERVICE_ID: string = 'service_x7azhze';
	const TEMPLATE_ID: string = 'template_kp9e783';

	export let data: PageData;
	const { form, errors, enhance } = superForm(data.form, {
		taintedMessage: 'Are you sure you want to leave?',
		clearOnSubmit: 'errors-and-message',
		multipleSubmits: 'prevent',
		onSubmit: () => {
			isLoading = true;
		},
		onResult: async ({ result }) => {
			if (result.status === 200) {
				data = result?.data?.form?.data;
				if (data) {
					await emailjs
						.send(
							SERVICE_ID,
							TEMPLATE_ID,
							{
								from_name: data.name.trim(),
								from_email: data.email.trim(),
								message: data.message.trim()
							},
							PUBLIC_KEY
						)
						.then(() => {
							toast.success('Message sent successfully!', {
								duration: 3000
							});
						})
						.catch((err) => {
							toast.error('Something went wrong.\nPlease try again', {
								duration: 3000
							});
						})
						.finally(() => {
							isLoading = false;
						});
				}
			} else {
				isLoading = false;
				toast.error('Please make sure you have entered\n valid details', {
					duration: 3000
				});
			}
		},
		onError: () => {
			toast.error('Something went wrong.\nPlease try again');
		}
	});
</script>

<section id="contact" class="flex w-full flex-col items-center justify-center gap-8">
	<h3 class="section-title">just a ping away</h3>
	<h2 class="section-heading">Contact</h2>
	<form method="POST" class="flex w-full max-w-[37rem] flex-col gap-6" use:enhance>
		<div class="flex flex-col gap-1">
			<label for="name">Your Name</label>
			<input
				id="name"
				type="text"
				name="name"
				placeholder="Enter your name"
				class="input input-bordered w-full"
				bind:value={$form.name}
			/>
			{#if $errors.name}
				<p class="text-error">{$errors.name?.at(0)}</p>
			{/if}
		</div>

		<div class="flex flex-col gap-1">
			<label for="email">Your Email</label>
			<input
				type="text"
				id="email"
				name="email"
				placeholder="Enter your email"
				class="input input-bordered w-full"
				bind:value={$form.email}
			/>
			{#if $errors.email}
				<p class="text-error">{$errors.email?.at(0)}</p>
			{/if}
		</div>

		<div class="flex flex-col gap-1">
			<label for="message">Your Message</label>
			<textarea
				id="message"
				name="message"
				placeholder="Enter your message"
				class="textarea textarea-bordered h-52 w-full"
				bind:value={$form.message}
			/>
			{#if $errors.message}
				<p class="text-error">{$errors.message?.at(0)}</p>
			{/if}
		</div>

		<button type="submit" class="btn btn-primary btn-sm btn-wide mt-5 self-center text-lg">
			{#if isLoading}
				<div class="flex gap-2">
					<span>Sending</span>
					<span class="loading loading-spinner loading-xs"></span>
				</div>
			{:else}
				<span>Send</span>
			{/if}
		</button>
	</form>
</section>

<!--I am not paid overtime to be coding this time... I don't even know why am coding this time... Oh yabah am single 🥲🥲🥲-->

<style>
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		-webkit-background-clip: text;
		-webkit-text-fill-color: #ffffff;
		transition: background-color 5000s ease-in-out 0s;
		box-shadow: inset 0 0 20px 20px #23232329;
	}
</style>
