function getUrlSearchParam(url, s) {
    const allQueries = url.slice(1).split('&');
    let val = '';

    allQueries.forEach((query) => {
        if (query.indexOf(s) !== -1) {
            val = query.split('=')[1];
        }
    });

    return val;
}

module.exports = (req, res, next) => {
    if (req.url.indexOf('/ads') === -1) {
        next();
    }
    else {
        const r = getUrlSearchParam(req.url, 'r'),
            max = 10,
            n = (parseInt(r, 10) % max) + 1;

        res.writeHead(302, {
            'Location': `https://unsplash.it/320/200?image=${n}`
        });

        res.end();
    }
};
