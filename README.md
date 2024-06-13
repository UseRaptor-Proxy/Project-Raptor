<div align="center">
    <img src="/.github/branding/pr.png">
    <p>Serving over 1+ million users since 2024.<p>
    <p>Project-Raptor is a web proxy with a Clean and Sleek UI and easy to use menus. Our goal is to provide the best user experience to everyone.</p>
</div>

> [!IMPORTANT]
> If you fork this project, consider giving it a star in the original repository!

## Features

- About:Blank Cloaking
- Tab Cloaking
- Wide collection of apps & games
- Clean, Easy to use UI
- Inspect Element
- Various Themes
- Password Protection (Optional)
- Built-in Tab System
- Now.gg Support
- Fast Speeds
- Geforce NOW Support
- Emulator Games
- http-proxy **(in beta)**

## Deployment

> [!IMPORTANT]
> You **cannot** deploy to static web hosts, including Netlify, Cloudflare Pages, and GitHub Pages.

### Server Deployment

You must run these commands on your server:

```bash
git clone https://github.com/UseProject-Raptor/Project-Raptor
cd Project-Raptor
```
Next depending on your package manager, run one of the following commands:

#### Bun

If you are using Bun, run the following commands:

```bash
bun i
bun start
```

#### pnpm

If you are using pnpm, run the following commands:

```bash
pnpm i
pnpm start
```

#### npm

If you are using npm, run the following commands:

```bash
npm i
npm run start
```

### Updating

```bash
cd Project-Raptor
git pull --force --allow-unrelated-histories # This may overwrite your local changes
```

### Deployment Alternatives
<a target="_blank" href="https://heroku.com/deploy/?template=https://github.com/UseProject-Raptor/Project-Raptor"><img alt="Deploy to Heroku" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/heroku.svg"></a>
<a target="_blank" href="https://app.koyeb.com/deploy?type=git&repository=github.com/UseProject-Raptor/Project-Raptor"><img alt="Deploy to Koyeb" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/koyeb.svg"></a>

Other methods of deploying are Render/OnRender.

#### What happened to Replit Deployment?

As of January 1st, 2024, Replit is [no longer free](https://blog.replit.com/hosting-changes). Try GitHub Codespaces instead.

### GitHub Codespaces

> [!NOTE]
> If you're setting the port below 1023, then you must run `sudo PORT=1023`

1. Create a GitHub account if you haven't already.
2. Click "Code" (green button) and then "Create Codespace on main."
3. In the terminal at the bottom, paste `pnpm i && pnpm start`.
4. Respond to the application popup by clicking "Make public."
> [!IMPORTANT]
> Make sure you click the "Make public." button, or the proxy won't function properly.
5. Access the deployed website from the ports tab.
6. For subsequent uses in the same codespace, just run `pnpm start`

### Solution for if there is no popup.

1. Run `pnpm i`, and before `pnpm start`, prepend `PORT=8080`, replacing 8080 with another port. For example, `PORT=6969 pnpm start`.
2. If this does not work then you can prepend `$env:PORT=8080;`, replacing 8080 with another port. For example, `$env:PORT=6969; pnpm start`
3. Go to the ports tab, Click Forward A Port, And type the port number.
4. Right-click Visibility and set Port Visibility to Public.

## Report Issues

If you encounter problems, open an issue on GitHub, and we'll address it promptly.

# Credits

A huge thanks goes out to all of the people who have contributed to Project-Raptor.
