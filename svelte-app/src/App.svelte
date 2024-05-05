<script>
	export let name;
	import { Link } from 'svelte-routing';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>


<Navbar>
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ApplyEase</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
		<NavLi><Link to="/">Home</Link></NavLi>
    	<NavLi><Link to="/resume">이력서</Link></NavLi>
    	<NavLi><Link to="/coverletter">자기소개서</Link></NavLi> 
    </NavUl>
</Navbar>



<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>