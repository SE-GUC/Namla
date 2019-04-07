const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');
const gallery = require("../../models/gallery");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


router.get("/", (req, res, next) => {
  gallery.find()
    .select("name _id productImage")
    .exec()
    .then(docs => {
      const response = {
        count: gallery.length,
        gallery: gallery.map(doc => {
          return {
            name: gallery.name,
            productImage: gallery.productImage,
            _id: gallery._id,
            request: {
              type: "GET",
              url: "http://localhost:3000/gallery/" + doc._id
            }
          };
        })
      };
      res.status(200).json(response);

    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", upload.single('productImage'), (req, res, next) => {
  const gallery = new gallery({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    productImage: req.file.path 
  });
  gallery
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created product successfully",
        createdProduct: {
            name: result.name,
            _id: result._id,
            request: {
                type: 'GET',
                url: "http://localhost:3000/gallery/" + result._id
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// router.get("/:productId", (req, res, next) => {
//   const id = req.params.productId;
//   Product.findById(id)
//     .select('name price _id productImage')
//     .exec()
//     .then(doc => {
//       console.log("From database", doc);
//       if (doc) {
//         res.status(200).json({
//             product: doc,
//             request: {
//                 type: 'GET',
//                 url: 'http://localhost:3000/products'
//             }
//         });
//       } else {
//         res
//           .status(404)
//           .json({ message: "No valid entry found for provided ID" });
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// });

// router.patch("/:productId", (req, res, next) => {
//   const id = req.params.productId;
//   const updateOps = {};
//   for (const ops of req.body) {
//     updateOps[ops.propName] = ops.value;
//   }
//   Product.update({ _id: id }, { $set: updateOps })
//     .exec()
//     .then(result => {
//       res.status(200).json({
//           message: 'Product updated',
//           request: {
//               type: 'GET',
//               url: 'http://localhost:3000/products/' + id
//           }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

// router.delete("/:productId", (req, res, next) => {
//   const id = req.params.productId;
//   Product.remove({ _id: id })
//     .exec()
//     .then(result => {
//       res.status(200).json({
//           message: 'Product deleted',
//           request: {
//               type: 'POST',
//               url: 'http://localhost:3000/products',
//               body: { name: 'String', price: 'Number' }
//           }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

module.exports = router;
