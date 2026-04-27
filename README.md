# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Local Development

> [!WARNING]
> **Do NOT use `npm install`.** This project's dependencies are exclusively managed by Yarn to ensure deterministic builds. Using `npm` will create a conflicting `package-lock.json` file.

### 1. Install Yarn Globally

If you do not have Yarn installed on your local machine, install it globally via npm:

```bash
npm install --global yarn
```

### 2. Install Dependencies

Once Yarn is installed, fetch and install the project's dependencies. Make sure you are in the root directory of the project:

```bash
yarn install
```

### 3. Start the Development Server

Start the local development server:

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Checkin code to github and the GitHub Actions will automatically build and deploy the website.
