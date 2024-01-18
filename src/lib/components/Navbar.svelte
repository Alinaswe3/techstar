<script lang="ts">
    import Icon from '@iconify/svelte';

    let isNavOpen = false;
</script>

<nav class="navbar fixed top-0 left-0 bg-base-100 shadow-2xl">
    <div class="navbar-start">
        <div class="dropdown">
            <button tabindex="0" class="btn btn-ghost lg:hidden" on:click={ e => {
                if (isNavOpen) {
                    const el = document.activeElement;
                    if (el) {
                        el?.blur();
                    }
                }
                isNavOpen = !isNavOpen;
            }}>
                {#if isNavOpen}
                    <Icon icon="fontisto:close-a"/>
                {:else}
                    <Icon icon="pajamas:hamburger" />
                {/if}
            </button>
            <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-btn w-52">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Clients</a></li>
            </ul>
        </div>
        <a href="/" class="lg:pl-4 pl-2 font-semibold text-xl">TechStar</a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Skills</a></li>
            <li><a href="/">Clients</a></li>
        </ul>
    </div>
    <div class="navbar-end pr-2">
        <a href="/" class="btn btn-sm btn-primary">Contact</a>
    </div>
</nav>