// fallback via <noscript rel="css"> for old browsers
} catch (e) {
    var doc = document,
        noscript = doc.getElementsByTagName('noscript'),
        contents,
        ns, fragment,
        dochead = doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;

    if (DEBUG) {
        var fallback_sheets = [];
    }

    for (var i = 0; i < noscript.length; i++) {
        ns = noscript[i].getAttribute('rel');
        if (ns && ns.toLowerCase() === 'css') {
            contents = noscript[i].textContent || noscript[i].innerHTML;

            // copy noscript stylesheets to div
            fragment = doc.createElement('div');
            fragment.innerHTML = contents;
            while (fragment.firstChild) {

                if (DEBUG) {
                    fallback_sheets.push(fragment.firstChild);
                }

                // append stylesheets to <head>
                dochead.appendChild(fragment.firstChild);
            }
        }
    }

    if (DEBUG) {
        if (window.console) {
            window.console.log('fallback via <noscript rel="css">', fallback_sheets);
        }
    }
}