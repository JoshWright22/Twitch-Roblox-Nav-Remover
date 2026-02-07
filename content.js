function removeRobloxNavLink() {
    // Target the Roblox link specifically via its data-a-target or href
    const robloxLink = document.querySelector('a[data-a-target="roblox-link"]') || 
                       document.querySelector('a[href="/directory/category/roblox"]');

    if (robloxLink) {
        // Target the parent container (fRzsnK) to remove the entire nav item
        const navItem = robloxLink.closest('.fRzsnK') || robloxLink;
        navItem.remove();
        console.log("Roblox navigation link removed.");
    }
}

// Function to fix the alignment gap between Browse and the More dots
function fixNavAlignment() {
    const styleId = 'twitch-nav-fix';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            /* Targets the flex container for the main nav links */
            .pbocV {
                margin-right: 0px !important; 
            }
            /* Reduces the left margin of the "More Options" button container */
            .jNQxNh {
                margin-left: 0.5rem !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initial Run
removeRobloxNavLink();
fixNavAlignment();

// Observer to handle dynamic content loading
const observer = new MutationObserver(() => {
    removeRobloxNavLink();
    fixNavAlignment();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});