module.exports = (res) => {
    setTimeout(() => res.end(), 100 + Math.floor(Math.random() * 300));
};