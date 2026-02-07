# Twitch-Roblox-Nav-Remover

A lightweight Chrome extension that removes the unnecessary Roblox navigation link from the Twitch top bar. Unlike basic blockers, it automatically fixes the layout alignment, closing the empty gap between 'Browse' and the "More Options" menu to keep your Twitch header clean and professional. Minimalist, fast, and easy to use.

## Features
- **Auto-Removal**: Instantly identifies and removes the Roblox category link from the top navigation.
- **Layout Correction**: Injects custom CSS to fix spacing issues, ensuring the "More Options" (three dots) menu aligns perfectly with the remaining links.
- **Dynamic Loading**: Uses a `MutationObserver` to ensure the link stays gone even when Twitch dynamically updates the page.

## Installation (Manual Mode)
If you are installing this code manually from GitHub:
1. Download this repository as a ZIP file and extract it.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the folder containing the extension files.

## Files
- `manifest.json`: Configuration and permissions for the extension.
- `content.js`: The script that handles the element removal and CSS alignment fixes.
- `icon16.png`, `icon48.png`, `icon128.png`: Extension icons for the Chrome toolbar and Web Store.

## Technical Details
The extension targets specific Twitch classes (`.fRzsnK`, `.pbocV`, and `.jNQxNh`) to ensure that the UI removal looks native and does not break other parts of the site layout.

## License
MIT
