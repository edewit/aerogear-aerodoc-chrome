chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create('aerogear-aerodoc-web/index.html', {
        'bounds': {
            'width': 480,
            'height': 800
        }
    });
});