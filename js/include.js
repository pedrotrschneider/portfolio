new Promise(async resolve => {
    let includes = [];
    [].forEach.call(document.getElementsByTagName('include'), element => includes.push(element));
    let includesCount = includes.length;
    if (includes.length == 0) resolve();

    for (let i = 0; i < includes.length; i++) {
        let include = includes[i];
        let filePath = include.getAttribute('src');
        await fetch(filePath).then(async file => {
            await file.text().then(content => {
                include.insertAdjacentHTML('afterend', content);
                include.remove();
    
                [].forEach.call(document.getElementsByTagName('Include'), element => {
                    if (!includes.includes(element)) {
                        includes.push(element)
                        includesCount++;
                    }
                });
            });
        });
        
        includesCount--;
        if (includesCount == 0) resolve();
    }
}).then(() => {
    let params = new URLSearchParams(window.location.search);
    let lang = params.get("lang");
    [].forEach.call(document.querySelectorAll(".lang"), element => {
        if (!element.classList.contains("lang__" + lang)) element.remove();
    })

    console.log(document.documentElement.innerHTML);
    main();
});