# My Browser

A fully functional web browser built with Electron, combining UI elements from Brave, Microsoft Edge, and Chrome-like features.

## Features

- **Navigation**: Back, forward, reload, home
- **Address Bar**: Enter URLs or search queries
- **Tabs**: Basic tab support (single tab for now)
- **Settings**: Comprehensive settings panel with privacy, appearance, and extension options
- **Custom Title Bar**: Windows-style minimize, maximize, close buttons
- **Secure**: Uses Electron's BrowserView for web content isolation

## UI Inspiration

- **Brave**: Minimalist design, privacy-focused settings
- **Microsoft Edge**: Fluent Design elements, clean layout
- **Chrome**: Large address bar, extensive settings

## Installation

1. Install Node.js (version 16 or higher) from https://nodejs.org/
2. Clone or download this project
3. Run `npm install` to install dependencies
4. Run `npm start` to launch the browser

## Building for Distribution

Run `npm run dist` to build distributable packages for Windows, macOS, and Linux.

## Development

- Main process: `main.js`
- Renderer process: `index.html`, `settings.html`
- Preload script: `preload.js` for secure API exposure

## Security

- Context isolation enabled
- Node integration disabled
- Secure preload scripts

## License

MIT