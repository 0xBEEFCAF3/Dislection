
;(() => {

    const fontUrl = 'https://github.com/armins88/armins88.github.io/blob/master/assets/fonts/OpenDyslexicMono-Regular.otf?raw=true';
    if ("fonts" in document) {
        const font = new FontFace(
                "Dyslexia",
                `url(http://localhost:8000/OpenDyslexicMono-Regular.otf) format('truetype')`

        );

        Promise.all([
                font.load()  //TODO add more fonts to be loaded
        ]).then(function(loadedFonts) {
                // Render them at the same time
                loadedFonts.forEach(function(font) {
                       document.fonts.add(font);
                    });
                });

                Array.from(document.querySelectorAll("*")).map(el => el.style.fontFamily = "Dyslexia");
        }

})()
