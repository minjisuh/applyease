<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { Link } from 'svelte-routing';
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