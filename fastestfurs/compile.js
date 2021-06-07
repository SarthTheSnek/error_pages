const pug = require('pug');
const fs = require('fs');

let html = pug.renderFile('./500.pug');
fs.writeFile('./500.html', html, err => {
    if (err) {
        console.error(err)
        return
    }
});
