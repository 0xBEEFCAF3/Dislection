
;(() => {
    const fontUrl = browser.runtime.getURL("fonts/OpenDyslexicMono-Regular.otf");
    if ("fonts" in document) {
        const font = new FontFace(
                "Dyslexia",
                `url('${fontUrl}') format('truetype')`

        );

        Promise.all([
                font.load()  //TODO add more fonts to be loaded
        ]).then(function(loadedFonts) {
                loadedFonts.forEach( f => {
                       document.fonts.add(f);
                    });
                });

                Array.from(document.querySelectorAll("*")).map(el => el.style.fontFamily = "Dyslexia");
        }

})()
