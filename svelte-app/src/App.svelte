<script>
	import Router from 'svelte-spa-router';
	import Navbar from './routes/Navbar/Navbar.svelte';
	import Main from './routes/Main/Main.svelte'
	import Resume from './routes/Resume/Resume.svelte'
	import CoverLetter from './routes/CoverLetter/CoverLetter.svelte'
	import PreviewWindow from './routes/Resume/PreviewWindow.svelte'
  
	const routes = {
	  '/': Main,
	  '/Resume': Resume,
	  '/CoverLetter': CoverLetter
	}
  </script>


<main>
	<Navbar />
	<Router {routes} />
</main>