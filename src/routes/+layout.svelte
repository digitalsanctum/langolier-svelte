<script>
	import Nav from '../lib/Nav.svelte';
    import '../styles/global.css';
</script>
<header>
    <Nav/>
</header>
<main>
    <!-- page content -->
    <slot/>
</main>
<footer>
    <p>&copy; 2023</p>
</footer>    

<style>
    
</style>