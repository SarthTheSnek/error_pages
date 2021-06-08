const pug = require('pug');
const fs = require('fs');

let html = pug.renderFile('./400.pug');
fs.writeFile('./400.html', html, err => {
    if (err) {
        console.error(err)
        return
    }
});

html = pug.renderFile('./401.pug');
fs.writeFile('./401.html', html, err => {
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

html = pug.renderFile('./404.pug');
fs.writeFile('./404.html', html, err => {
    if (err) {
        console.error(err)
        return
    }
});

html = pug.renderFile('./405.pug');
fs.writeFile('./405.html', html, err => {
    if (err) {
        console.error(err)
        return
    }
});

html = pug.renderFile('./418.pug');
fs.writeFile('./418.html', html, err => {
    if (err) {
        console.error(err)
        return
    }
});

html = pug.renderFile('./500.pug');
fs.writeFile('./500.html', html, err => {
    if (err) {
        console.error(err)
        return
    }
});

html = pug.renderFile('./502.pug');
fs.writeFile('./500.html', html, err => {
    if (err) {
        console.error(err)
        return
    }
});

html = pug.renderFile('./503.pug');
fs.writeFile('./503.html', html, err => {
    if (err) {
        console.error(err)
        return
    }
});
