<script>
  // Your selected Skeleton theme:
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

  // This contains the bulk of Skeletons required styles:
  import '@skeletonlabs/skeleton/styles/skeleton.css';

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import '../app.postcss';
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
