<script lang="ts">
    import Icon from '@iconify/svelte';
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    let isNavOpen: boolean = false;
</script>

{#if isNavOpen}
    <!-- `A11y: Non-interactive element <div> should not be assigned mouse or keyboard event listeners.` -->
    <div class="absolute top-0 left-0 w-full h-full z-20" on:click={() => isNavOpen =false }> </div>
{/if}
{#if isNavOpen}
    <!-- `A11y: Non-interactive element <ul> should not be assigned mouse or keyboard event listeners.` -->
    <ul on:click={() => isNavOpen=false} transition:slide={{delay:100, duration:200, easing: quintOut, axis: 'x'}} class="absolute left-[1rem] top-[3.8rem] menu menu-sm mt-3 z-30 p-2 shadow bg-base-100 rounded-btn w-40">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Skills</a></li>
        <li><a href="/">Clients</a></li>
    </ul>
{/if}
<nav class="navbar fixed top-0 left-0 bg-base-100 shadow-2xl z-10">
    <div class="navbar-start">
        <div class="dropdown">
            <button tabindex="0" class="relative btn btn-ghost hidden lg:block" on:click={() =>{
                isNavOpen = !isNavOpen;
            }
            }>
                {#if isNavOpen}
                    <Icon  icon="fontisto:close-a"/>
                    {:else}
                    <Icon class="open" icon="pajamas:hamburger" />
                    {/if}
            </button>
        </div>
        <a href="/" class="lg:pl-4 pl-2 font-semibold text-xl">TechStar</a>
    </div>
    <div class="navbar-center lg:hidden flex">
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