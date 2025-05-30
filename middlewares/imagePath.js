const setImagePath = (req, res, next) => {
    req.imagePath = `${req.protocol}://${req.get('host')}/imgs/movies_cover/`;
    next();
}

module.exports = setImagePath
