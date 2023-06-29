<script lang="ts">
  import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import '../app.css';
  import { AppShell } from '@skeletonlabs/skeleton';
  import Nav from "../lib/Nav.svelte";
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft"></svelte:fragment>
  <svelte:fragment slot="pageHeader"><Nav /></svelte:fragment>
  <slot />
  <svelte:fragment slot="pageFooter">
    <hr/>
    <p>&#xa9; 2023</p>
  </svelte:fragment>
</AppShell>


<style>

</style>
