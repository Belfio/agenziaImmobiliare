1. Project Setup:

- Place all new components in the /components directory at the root level (not in the app folder) and name them using the format example-component.ts unless otherwise specified.
- Place all new pages in the /app directory.
- Use the Remix.js app router.
- Perform all data fetching in server components and pass the data down as props.
- For client components (useState, hooks, etc.), ensure 'use client' is set at the top of the file.

2. Server-Side API Calls:

- Perform all interactions with external APIs (e.g., Reddit, OpenAI) server-side.
- Create dedicated API routes in the 'pages/api' directory for each external API interaction.
- Client-side components should fetch data through these API routes, not directly from external APIs.

3. Environment Variables:

- Store all sensitive information (API keys, credentials) in environment variables.
- Use an 'env.local' file for local development and ensure it's listed in .gitignore.
- For production, set environment variables in the deployment platform (e.g., Vercel).
- Access environment variables only in server-side code or API routes.

4. Error Handling and Logging:

- Implement comprehensive error handling in both client-side components and server-side API routes.
- Log errors on the server-side for debugging purposes.
- Display user-friendly error messages on the client-side.

5. Type Safety:

- Use TypeScript interfaces for all data structures, especially API responses.
- Avoid using the 'any' type; instead, define proper types for all variables and function parameters.

6. API Client Initialization:

- Initialize API clients (e.g., Snoowrap for Reddit, OpenAI) in server-side code only.
- Implement checks to ensure API clients are properly initialized before use.

7. Data Fetching in Components:

- Use React hooks (e.g., useEffect) for data fetching in client-side components.
- Implement loading states and error handling for all data fetching operations.
