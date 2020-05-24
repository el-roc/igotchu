const express = require('express');
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({storage: storage});
// Posts Model
const Posts = require('../../models/Posts')



router.route('/').get((req, res) => {

  console.log('aqui')
    Posts.find()
    .sort()
    .then(posts =>  res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/userPosts').post((req, res) => {



  const sansSano = req.body.email

  console.log(sansSano, "here")
  let email = sansSano.toString().replace(/"/g, "")

console.log(email, 'look for me')

  Posts.find({email})
  .sort({})
  .then(posts => res.json(posts))
  .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/add', upload.single('image'), (req, res) => {

console.log(req.body)
  // _id: "User",
  // itemName: req.body.itemId,
  // itemPrice: req.body.price,
  // itemStatus: req.body.status,
  // itemDescription: req.body.itemDescription,
  // itemCategory: req.body.category,
  // itemMedium: req.body.medium
  // itemLocation: req.body.location,
  // imgPath: req.file.filename 
  // _id,


    const _id = 'Libero'
    const email = 'zhu@gmail.com'
    const userId = 'test'
    const itemName  = 'Red shoes'
    const itemPrice = 0
    const itemDescription = 'test'
    const itemCategory = 'test'
    const itemMedium = 'test'
    const itemLocation = 'test'
    const boughtBy = 'test'
    const imageURL = 'test'
    const imageName = 'test'
    const imageData = 'test'
    console.log(req.file, req.body.itemName);
    const newPost = new Posts({
        userId,
        itemName,
        itemPrice,
        itemDescription,
        itemCategory,
        itemMedium,
        itemLocation,
        boughtBy,
        imageURL,
        imageName,
        imageData,
        email,
    });
    newPost.save()
    .then(() => res.json('added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });


  router.delete('/remove', (req, res) => {
    Posts.findOneAndDelete({email: req.body.email, title: req.body.title}, (data) => {
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