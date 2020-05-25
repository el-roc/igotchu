const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs'); 

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './client/src/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({storage: storage});
// Posts Model
const Posts = require('../../models/Posts')



router.route('/').get((req, res) => {
    Posts.find()
    .sort()
    .then(posts =>  res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/userPosts').post((req, res) => {
  const sansSano = req.body.email

  let email = sansSano.toString().replace(/"/g, "")


  Posts.find({email})
  .sort({})
  .then(posts => res.json(posts))
  .catch(err => res.status(400).json('Error: ' + err));
})



router.post('/add', upload.single('image'), (req, res, next) => {

console.log(req.body, "ajo")
console.log(req.file.path, 'sans file')

const path = req.file.path
    const email = req.body.email
    const itemName  = req.body.itemName
    const itemPrice = req.body.itemPrice
    const itemDescription = req.body.itemDescription
    const itemCategory = req.body.itemCategory
    // const itemMedium = 'test'
    const itemLocation = req.body.itemLocation
    // const boughtBy = ""
    const imagePath = path
    const newPost = new Posts({
        itemName,
        itemPrice,
        itemDescription,
        itemCategory,
        itemLocation,
        email,
        imagePath
    });
    newPost.save()
    .then(() => res.json('added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });


  router.delete('/remove', (req, res) => {

    let sanoEmail = req.body.email
    let email = sanoEmail.toString().replace(/"/g, "")

    console.log(email, req.body.itemName)
    Posts.findOneAndDelete({email: email, itemName: req.body.itemName}, (data) => {
        console.log(data)
    })
    .then(() => res.json('deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
  })


module.exports = router;







// router.post('/add', (req, res) => {
//     // let uId = ObjectId(req.session.passport.user)
//     // console.log(uId)
//     const newPost = new Posts({
//         _id: "User",
//         itemName: req.body.itemId,
//         itemPrice: req.body.price,
//         itemStatus: req.body.status,
//         itemDescription: req.body.itemDescription,
//         itemCategory: req.body.category,
//         itemMedium: req.body.medium
//         itemLocation: req.body.location,
//         imgPath: req.file.filename 
//     });

//     newPost.save()
//     .then(() => res.json('added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });




// module.exports = router;

// router.post('/add', (req, res) => {
//     // let uId = ObjectId(req.session.passport.user)
//     const newPost = new Posts({
//         userId: uId,
//         itemName: req.body.itemId,
//         itemPrice: req.body.price,
//         itemStatus: req.body.status,
//         itemDescription: req.body.itemDescription,
//         itemCategory: req.body.category,
//         itemMedium: req.body.medium,
//         itemLocation: req.body.location,
//         imgPath: req.file.filename 
//     });

//     newPost.save()
//     .then(() => res.json('added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });


// router.route('/add').post((req, res) => {
//     const _id = 'aiperi'
//     // const userId = 'test'
//     const itemName  = 'test'
//     const itemPrice = 0
//     const itemDescription = 'test'
//     const itemCategory = 'test'
//     const itemMedium = 'test'
//     const itemLocation = 'test'
//     // const boughtBy = 'test'
//     const imageURL = 'test'
  
//         const newPost = new Posts({
//             userId: _id,
//             itemName: itemName,
//             itemPrice: itemPrice,
//             itemStatus: req.body.status,
//             itemDescription: itemDescription,
//             itemCategory: itemCategory,
//             itemMedium: itemMedium,
//             itemLocation: itemLocation,
//             imgPath: imageURL 
//     });
  
//     newPost.save()
//     .then(() => res.json('added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
//   });
