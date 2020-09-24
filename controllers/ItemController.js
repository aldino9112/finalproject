const { Item } = require("../models")

class ItemController {

        static getItem(req, res) {    
          Item.findAll()
          .then(items => {
            res.render("item", { items })
          })
          .catch(err => {
            res.send(err)
          })
        }
      
        static addItem(req, res) {
          res.render("add_item", { error: req.query.error })
        }
      
        static submitAddItem(req, res) {
          const data = req.body
          let errors = []
      
          Item.create({
            name: data.name,
            type: data.type,
            price: data.price,
            color: data.color,
            availability: data.availability,
          }).then(data => {
              res.redirect('/items')
          }).catch(err => {
            res.redirect(`/items/add?error=${err}`)
          });
        }
      
        static editItem(req, res) {
          const id = req.params.id
          
          Item.findOne({
            where:{
              id: id
            }
          })
          .then(data => {
            res.render("edit_item", { item : data, error: req.query.error })
          })
          .catch(err => {
            res.send(err)
          })
      
        }
      
        static submitEditItem(req, res) {
          const id = req.params.id
          const data = req.body
      
          let errors = []
      
          Item.update({
            name: data.name,
            type: data.type,
            price: data.price,
            color: data.color,
            availability: data.availability,
          },{
            where: {
              id: id
            }
          }).then(() => {
              res.redirect('/items')
            })
            .catch(err => {
              res.redirect(`/items/${id}/edit?error=${err}`)
            });   
        }
      
        static deleteItem(req, res) {
          const id = req.params.id
          
          Item.destroy({
            where: {
              id: id
            }
          }).then(() => {
            res.redirect('/items')
            })
            .catch(err => {
              res.send(err)
            });
        }
      }
      
      
module.exports = ItemController