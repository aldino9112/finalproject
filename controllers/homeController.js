const { Account, Item, Transaction} = require('../models')

class HomeController {

    static registerForm (req, res) {
        res.render('register')
    }

    static register (req, res) {
        Account.create ({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then (success => {
            res.render('login')
        })
        .catch (err => {
            res.send(err.message)
        })
    }

    static profile( req, res) {
        const id = req.params.id
        Account.findByPk(id)
        .then(data => res.render('profile' , { data } ))
        .catch(err => res.send(err))
    }

    static editForm(req, res) {
        const id = req.params.id;
        Account.findByPk(id) 
        .then(data => {
            res.render('account-edit', { data })
        })
        .catch(err => {
            res.send(err);
        })
    }

    static edit(req, res) {
        const id = req.params.id
        const { first_name, last_name, email, no_telephone } = req.body;
        Account.update({
            first_name, last_name, email, no_telephone 
        }, {
            where: {
                 id 
            }
        })
        .then(result => {
            res.redirect("../profile")
        })
        .catch(err => {
            res.send(err)
        })
    }

    static loginForm (req, res) {
        if (req.session.AccountId) {
            res.redirect('/items')
        } else {
            res.render('./login.ejs')
        }
    }

    static login (req, res) {
        Account.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
        .then(data => {
            if (data) {
                req.session.AccountId = data.id
                res.redirect('/items')
            } else {
                res.send(`username atau password salah`)
            }
        })
        .catch(err => {
            res.send(err)
        })
    }

    static logout (req, res) {
        delete req.session.AccountId
        res.redirect('/login')
    }

    static checkout(req, res) {
        const id = req.session.AccountId
        Account.findByPk(id, {
            include: Item
        })
        // .then(data=> res.send(data))
        .then(data => res.render('checkout', { data }))
        .catch(err => err)
    }

}

module.exports = HomeController