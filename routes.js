var express = require('express');
var app = express();app.set('view engine', 'ejs');
module.exports = function(app, passport, db, multer, ObjectId) {
​
// normal routes ===============================================================
​
// show the home page (will also have our login links)
app.get('/', function(req, res) {
    res.render('index.ejs');
});
​
// PROFILE SECTION =========================
app.get('/profile', isLoggedIn, function(req, res) {
    let uId = ObjectId(req.session.passport.user)
    db.collection('posts').find({'posterId': uId}).toArray((err, result) => {
      if (err) return console.log(err)
      res.render('profile.ejs', {
        user : req.user,
        posts: result
      })
    })
});
​
​
​
app.get('/', function(req, res) {
    db.collection('postedItems').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.json(result)
      })
    })
​
// Routes for each individual post Ticket #11 (Jessie)
app.get('/postedItem/:id', function(req, res) {
    let postedItemId = ObjectId(req.params.id)
    db.collection('postedItems').find({_id: postedItemId}).toArray((err, result) => {
    if (err) return console.log(err)
    res.json(result)
      })
  });
​
//  Routes for the individual profiles of the sellers Ticket #13 (Abbey)
  app.get('/userProfile/:id', function(req, res) {
      let profileid = ObjectId(req.params.id)
      db.collection('postedItems').find({userId: profileid}).toArray((err, result) => {
      if (err) return console.log(err)
      res.json(result)
        })
    });
​
​
// Routes for the search query Ticket #9 (Abbey and Jessie)
app.get('/postedItemSearch', function(req, res) {
      db.collection('postedItems').createIndex({
        itemDescription: "text"
      })
      db.collection('postedItems').find({ $text:
         { $search: searchTerm }}).toArray((err, result) => {
           // changed "food" to variable SearchTerm (A.B.)
           // replace the search with a front value API of choice
        if (err) return console.log(err)
        res.json(result)
        // replace with res.render (filter.js)
      })
    });
​
// user is login and stores data into the database (Orson and Victor Ticket#24)
app.get('/createItemPage', isLoggedIn, function(req, res) {
  db.collection('itemPosts').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('createItemPage', {
      user: req.user,
      itemPosts: result
    })
  })
});
​
//Create Post =========================================================================
// Our idea is that item object in the collection has an empty buyerId field that can be filled once someone interested wants to buy the item (Orson and Victor Ticket# 23)
// SET STORAGE
​
// Image Upload Code =========================================================================
​
     var storage = multer.diskStorage({
       destination: function (req, file, cb) {
         cb(null, 'public/images/uploads')
       },
       filename: function (req, file, cb) {
         cb(null, file.fieldname + '-' + Date.now())
       }
     })
     var upload = multer({ storage: storage });
//End
  app.post('/postItem', upload.single('file-to-upload'), (req, res, next) => {
        let uId = ObjectId(req.session.passport.user)
        db.collection('itemPosts').save({
              userId: uId,
              itemName: req.body.itemId,
              itemDescription: req.body.itemDescription,
              itemStatus: req.body.status,
              itemPrice: req.body.price,
              imgPath: 'images/uploads/' + req.file.filename
            }, (err, result) => {
              if (err) return console.log(err)
              console.log('saved to database')
              res.redirect('/createItemPage')
            })
          });
//This is when a user clicks on item and tries to buy it. It updates the item object with the customers ID. This can be helpful because only items with a buyerId of null can be shown to the public.
// (Orson and Victor Ticket# 25)
app.put('/customerClickItemToBuy', (req, res) => {
  var itemId = ObjectId(req.body.itemId.trim());
  var buyerId = ObjectId(req.body.buyerId.trim());
  db.collection('itemPosts')
    // Our idea is that the front end team renders the posts or itemID for every Post so we can update
    //  How do we find the postId to update it?
    .findOneAndUpdate({
      _id: itemID
    }, {
      $set: {
        buyerId: buyerId
      }
    }, {
      sort: {
        _id: -1,
      },
      upsert: false
    }, (err, result) => {
      if (err) return res.send(err)
    })
});
//When the owner of the item approves the sales it updates the status field and no longer displaying the item to the public
      app.put('/updateItem', (req, res) => {
        var itemId = ObjectId(req.body.itemId.trim());
        var buyerId = ObjectId(req.body.buyerId.trim());
        db.collection('itemPosts')
          // Our idea is that the front end team renders the posts or itemID for every Post so we can update
          //  How do we find the postId to update it?
          .findOneAndUpdate({
            _id: itemID
          }, {
            $set: {
              accepted: "sold",
              buyerId: buyerId
            }
          }, {
            sort: {
              _id: -1,
            },
            upsert: false
          }, (err, result) => {
            if (err) return res.send(err)
          })
      });
​
//if the seller doesn't want to sell to the first buyer they can reject the sale and the buyerId go back to null. Making it public to everyone.
      app.put('/sellerDoesNotSellToFirstBuyer', (req, res) => {
        var itemId = ObjectId(req.body.itemId.trim());
        db.collection('itemPosts')
          .findOneAndUpdate({
            _id: itemID
          }, {
            $set: {
              buyerId: null
            }
          }, {
            sort: {
              _id: -1,
            },
            upsert: false
          }, (err, result) => {
            if (err) return res.send(err)
          })
        });
​
//(Orson and Victor Ticket#26)
      app.delete('/deletePost', (req, res) => {
        var itemId = ObjectId(req.body.itemId.trim());
        db.collection('itemPosts').findOneAndDelete({
          itemName: req.body.itemId,
        }, (err, result) => {
          if (err) return res.send(500, err)
          res.send('Message deleted!')
        })
      })
​
    // Ticket #12 & 17 (Aiperi)
      app.get(‘/profile:id’, isLoggedIn, function(req, res) {
        var userId = req.session.passport.user
        db.collection(‘postedItems’).find({
          “userId”: userId
        }).toArray((err, soldItems) => {
          db.collection(‘postedItems’).find({
            “boughtBy”: userId
          }).toArray((err, boughtItems) => {
            if (err) return console.log(err)
            res.render(‘order.ejs’, {
              soldItems: soldItems,
              boughtItems: boughtItems,
              user: req.user
            })
          })
        })
      });
​
​
​
​
​
// // Routes for the individual profiles of the sellers Ticket #13 (Abbey)
// app.get("/user/:id", function(req, res) {
//   // /post/:zebra (maybe needed if routing from a specfic post)
//   // let postId = ObjectId(req.params.zebra)
//       let uId = ObjectId(req.params.id)
//       // the let userID attain the unique userID number in order to get the specfic profile
//       db.collection("postedItem").find({'userId': uId}}).toArray((err, result) => {
//         // this will go to the postedItem database
//         // consider specficy the .find method to the exact postId (refer to Elmer's Demo Day)
//         // NOTE: may need to one more key-value pair to specficfy (cantspellsorry) if the item has been boguht already OR
//         // front-end may choose to seperate sections (postedItems.boughtBy === null (no quotes,not a string ijs) vs postedItems.boughtBy === 'purchased')
//         if (err) return console.log(err)
//         //res.json(result) this works as well
//         res.json(result)
//     // show you the user is selling
//       })
//     })
​
​
​
​
​
// LOGOUT ==============================
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
​
function isLoggedIn(req, res, next) {
      if (req.isAuthenticated())
      return next();
​
      res.redirect('/');
    }
  }