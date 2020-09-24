function checkLogin (req, res, next) {
    if(req.session.AccountId) {
        next()
    } else {
        res.redirect('/login')
    }
}

module.exports = checkLogin