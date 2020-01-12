const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const decorator = require("./database/decorator");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);
const galleryRoute = require("./routes/gallery.js");
const Gallery = require("./database/models/Gallery");

const PORT = 8080;
const saltRounds = 12;
const User = require("./database/models/User");

require("dotenv").config();

const client = redis.createClient({ url: process.env.REDIS_URL });

app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(decorator);
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.use(
  session({
    store: new RedisStore({ client }),
    secret: process.env.REDIS_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect("/login.html");
  }
}

passport.use(
  // middleware to verify if our user is logged in or not
  new LocalStrategy(function(username, password, done) {
    return new User({ username: username })
      .fetch()
      .then(user => {
        if (user === null) {
          return done(null, false, { message: "bad username or password" });
        } else {
          user = user.toJSON();

          bcrypt.compare(password, user.password).then(res => {
            // Happy route: username exists, password matches
            if (res) {
              return done(null, user); // this is the user that goes to passport.serializer
            }
            // Error Route: Username exists, password does not match
            else {
              return done(null, false, { message: "bad username or password" });
            }
          });
        }
      })
      .catch(err => {
        return done(null, false, { message: "bad username or password" });
      });
  })
);

passport.serializeUser(function(user, done) {
  // creates the key session pair object

  return done(null, { id: user.id, username: user.username });
});

passport.deserializeUser(function(user, done) {
  // applies that key session to other things
  return done(null, user);
});

app.use(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login.html"
  })
);

app.post("/register", (req, res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      res.render("error", { err: err });
    } // return 500

    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) {
        res.render("error", { err: err });
      } // return 500

      return new User({
        username: req.body.username,
        password: hash
      })
        .save()
        .then(user => {
          return res.redirect("/login.html");
        })
        .catch(err => {
          res.render("error", { err: err });
        });
    });
  });
});

app.get("/", (req, res) => {
  Gallery.forge()
    .orderBy("id", "ASC")
    .fetchAll({ withRelated: ["user"] })
    .then(results => {
      if (req.user) {
        res.render("gallery", {
          photos: results.toJSON().slice(1),
          main_id: results.toJSON()[0].id,
          main_url: results.toJSON()[0].image_url,
          loggedIn: true
        });
      } else {
        res.render("gallery", {
          photos: results.toJSON().slice(1),
          main_id: results.toJSON()[0].id,
          main_url: results.toJSON()[0].image_url
        });
      }
    })
    .catch(err => {
      res.render("error", { err: err });
    });
});

app.get("/gallery", (req, res) => {
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.use("/gallery", galleryRoute);

app.listen(PORT, () => {
  console.log(`Server started on PORT : ${PORT}`);
});
