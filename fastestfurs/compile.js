const pug = require('pug');
const fs = require('fs');

let html = pug.renderFile('./500.pug');
fs.writeFile('./500.html', html, err => {
    if (err) {
        console.error(err)
        return
    }
});

html = pug.renderFile('./404.pug');
fs.writeFile('./404.html', html, err => {
    if (err) {
        console.error(err)
        return
    }
});

html = pug.renderFile('./403.pug');
fs.writeFile('./403.html', html, err => {
    if (err) {
        console.error(err)
        return
    }
});