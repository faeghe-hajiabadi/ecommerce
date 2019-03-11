const faces = require('cool-ascii-faces').faces;

function getRandomString () {
    return (Math.random()).toString(36).substr(2);
}

function getRandomInRange (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


module.exports = () => {
    const data = { products: [] },
        facesLen = faces.length;

    // Create 500 products
    for (let i = 0; i < 500; i++) {
        data.products.push({
            id: getRandomInRange(0, 100000) + '-' + getRandomString(),
            size: getRandomInRange(12, 40),
            price: getRandomInRange(1, 1000),
            face: faces[i % facesLen],
            date: new Date(Date.now() - getRandomInRange(1, 1000 * 3600 * 24 * 15)).toString()
        });
    }

    return data;
}
