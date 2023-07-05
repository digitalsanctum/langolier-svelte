# langolier-svelte

Langolier front-end implemented with SvelteKit.


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## Thinking out Loud

* What should the major elements of the garden look like?
* `/gardens/shanes-garden/blossoms` - a garden can have multiple blossoms
* `/gardens/shanes-garden/seeds` - seeds can lead to multiple blossoms
* `branches` - used to link to other gardens?
* Would it make more sense to have the theme be a "knowledge tree" rather than a "digital garden"?
* Need to diagram the hierarchy of the site.
* Why do products focus on either reading or writing? Why not both?
* Combine hacker tools such as the ones found here https://projectdiscovery.io/#/ with AGI tools such as GPT-3.