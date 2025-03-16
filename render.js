setTimeout(() => {
    console.log("%cClutterless ROBLOX", "color:white;font-size:1.5rem;background:linear-gradient(90deg,rgb(56, 148, 224), blue);border-radius:0.5rem;padding:0.15rem 0.5rem;")
    console.log("%c▶ Making navigation on roblox great again!", "font-size:0.7rem;font-style:italic;color:lightgreen;")

    // support us message
    console.log("%c▶ Want to support this project? Feel free to at our github, we're open source! [github link]", "font-size:0.7rem;font-style:italic;color:orange;")
}, 1000)

function waitForElm(selector) { // From https://stackoverflow.com/a/61511955 (Minor change to select All elements with id)
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelectorAll(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelectorAll(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

window.addEventListener("load", (event) => {
    waitForElm('[data-testid="home-page-game-grid"]').then((elements) => {
        for (let item of elements) {
            item.remove();
        }
    });

    waitForElm('.sdui-feed-item-container').then((elements) => {
        for (let item of elements) {
            item.remove();
        }
    });
})
