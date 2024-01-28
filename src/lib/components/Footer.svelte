<script>
	import Icon from '@iconify/svelte';
</script>

<footer class="mt-16 flex flex-col items-center gap-3 rounded-t-2xl bg-base-200 px-4 py-4 text-sm">
	<p class="text-center">
		Powered by <strong>TonyStar</strong> in conjunction with
		<a class="link underline-offset-4" href="https://www.alinaswecodes.com/">Alinaswe Codes</a>
	</p>
	<div class="flex gap-6">
		<a href="https://www.facebook.com/profile.php?id=100094165897176" target="_blank">
			<Icon icon="mdi:facebook" class="text-2xl transition-all duration-300 hover:text-primary"
			></Icon>
		</a>
		<a href="https://wa.me/message/T7THJAPVGD3SL1" target="_blank">
			<Icon icon="mdi:whatsapp" class="text-2xl transition-all duration-300 hover:text-primary"
			></Icon>
		</a>
		<a href="https://www.instagram.com/tonderai__?igsh=Y2MyMzhjbXZrNDhm" target="_blank">
			<Icon icon="mdi:instagram" class="text-2xl transition-all duration-300 hover:text-primary"
			></Icon>
		</a>
	</div>
	<p class="text-center text-xs">
		&copy; <span>{new Date().getFullYear()}</span> TechStar. All rights reserved.
	</p>
</footer>
