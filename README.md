# langolier-svelte

Langolier front-end implemented with SvelteKit. Uses the langolier-api project as the back-end.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a
development server:

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

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target
> environment.

## Thinking out Loud

* What should the major elements of the garden look like?
* `/gardens/shanes-garden/blossoms` - a garden can have multiple blossoms
* `/gardens/shanes-garden/seeds` - seeds can lead to multiple blossoms
* `branches` - used to link to other gardens?
* Would it make more sense to have the theme be a "knowledge tree" rather than a "digital garden"?
* Need to diagram the hierarchy of the site.
* Why do products focus on either reading or writing? Why not both?
* Combine hacker tools such as the ones found here https://projectdiscovery.io/#/ with AGI tools such as GPT-3.

## High Level Features

* **Curated Discovery**. People don't necessarily know what's possible with the platform or AI. To address this, present a **curated way to
  discover what's possible**. For example, given some large piece of text, summarize it and optionally enable questions to
  be asked as follow-up.
* Start with **a question or request about a specific topic** and optionally enable additional information to be requested.
  For example, "tell me about the relationship between models and GPU requirements for training."
* **Content Generation**.
* Syncs across platforms
* The underlying content is just markdown files. This way, folks can use any editor they want.

## Digital Garden Combined with AI Platform

A digital garden combined with an AI platform would be a highly interactive and personalized learning environment.
Here's a brief description:

Digital Garden: This is a metaphor for thinking about writing and creating that focuses less on the resulting "
showpiece" and more on the process, care, and craft it takes to get there. It's a place where ideas, thoughts, notes,
and learning resources grow over time. It's a de-emphasized publishing, where the importance is on the process of
thought and learning, rather than the outcome.

AI Platform: This is a suite of services that provide machine learning and data analysis capabilities. It includes
services for data storage, data processing, machine learning model training, and prediction generation.

When combined, a digital garden with an AI platform could look like this:

Personalized Learning Paths: The AI could analyze a user's interactions, interests, and learning progress within the
digital garden to suggest personalized learning paths. It could recommend resources, topics, or areas of study that
align with the user's goals and interests.

Interactive Content: The AI could generate interactive content based on the user's learning path. This could include
quizzes, simulations, or problem-solving exercises that help reinforce learning.

Content Generation and Enhancement: The AI could assist in generating new content for the digital garden. For example,
it could suggest new topics to explore, generate summaries of complex materials, or enhance existing content with
additional insights or resources.

Community Interaction: The AI could facilitate interaction within the community of learners. It could suggest
collaborations based on shared interests, facilitate discussions, or help users find mentors or study groups.

Continuous Learning: The AI could monitor the user's progress and adapt the learning path as needed. It could suggest
new resources when the user is ready to advance or provide additional support if the user is struggling.

In essence, a digital garden combined with an AI platform would be a dynamic, adaptive, and interactive learning
environment that grows and evolves with the learner.