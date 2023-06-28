<script>
  import "../app.postcss";
  import Nav from "../lib/Nav.svelte";
</script>

<header>
  <Nav />
</header>
<main>
  <!-- page content -->
  <slot />
</main>
<footer>
  <p>&#xa9; 2023</p>
</footer>

<style>
</style>
