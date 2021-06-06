const pug = require('pug');
const fs = require('fs');

let html = pug.renderFile('./error_500.pug');
fs.writeFile('./error_500.html', html, err => {
    if (err) {
        console.error(err)
        return
    }
});
