const express = require("express");
const router = express.Router();

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect("/login.html");
  }
}

router.get("/new", isAuthenticated, (req, res) => {
  res.render("newPhoto");
});

router.get("/:id", (req, res) => {
  req.db.Gallery.where({ id: req.params.id })
    .fetchAll({ withRelated: ["user"] })
    .then(results => {
      if (results.toJSON().length === 0) {
        throw new Error("Page not found!");
      } else {
        res.render("photoSingle", results.toJSON()[0]);
      }
    })
    .catch(err => {
      res.render("error", { err: err });
    });
});

router.post("/", (req, res) => {
  if (req.body.image_url && req.body.description) {
    new req.db.Gallery({
      image_url: req.body.image_url,
      description: req.body.description,
      user_id: req.body.user_id
    })
      .save()
      .then(Gallery => {
        res.redirect("/");
      });
  } else {
    res.render("newPhoto", {
      paramsNotFilled: true
    });
  }
});

router.get("/:id/edit", isAuthenticated, (req, res) => {
  req.db.Gallery.where({ id: req.params.id })
    .fetch()
    .then(results => {
      if (results.attributes.user_id === req.user.id) {
        res.render("editPhoto", {
          id: req.params.id,
          user_id: results.attributes.user_id,
          image_url: results.attributes.image_url,
          description: results.attributes.description
        });
      } else {
        res.render("error", {
          err: "You are not authorized to edit this photo."
        });
      }
    })
    .catch(err => {
      res.render("error", { err: err });
    });
});

router.put("/:id", (req, res) => {
  req.db.Gallery.where({ id: req.params.id })
    .fetch()
    .then(() => {
      new req.db.Gallery({ id: req.params.id })
        .save(
          {
            image_url: req.body.image_url,
            description: req.body.description,
            user_id: req.body.user_id
          },
          { patch: false }
        )
        .then(() => {
          res.redirect(`/gallery/${req.params.id}`);
        });
    })
    .catch(err => {
      res.render("error", { err: err });
    });
});

router.delete("/:id", (req, res) => {
  req.db.Gallery.where({ id: req.params.id })
    .destroy()
    .then(() => {
      res.redirect(`/`);
    })
    .catch(err => {
      res.render("error", { err: err });
    });
});

module.exports = router;
