const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Import handlers & modules
const userRoutes = require("./routes/user.routes.js");
const postsRoutes = require("./routes/posts.routes.js");
const rolesRoutes = require("./routes/roles.routes.js");
const commentsRoutes = require("./routes/comments.routes.js");

const { correctionTp1 } = require("./handlers/main.handler.js");

// Middleware
const printDate = (req, res, next) => {
   console.log(new Date(Date.now()));
   next();
};
const appName = (req, res, next) => {
   res.set({ "Application-name": " ecv-digital" });
   next();
};
const authorize = (req, res, next) => {
   if (!req.headers["Authorization"]) res.status(403).send();
   next();
};
const ContextUser = (req, res, next) => {
   res.set({ "App-Context": "Users" });
   next();
};
const ContextPosts = (req, res, next) => {
   res.set({ "App-Context": "Posts" });
   next();
};
const ContextComments = (req, res, next) => {
   res.set({ "App-Context": "Comments" });
   next();
};
app.use(printDate);
app.use(appName);
/* app.use(authorize); */

// Import libs
app.use(bodyParser.json());

// Routes
app.get("/correction-tp1", correctionTp1);

app.use("/users", ContextUser, userRoutes);
app.use("/posts", ContextPosts, postsRoutes);
app.use("/roles", rolesRoutes);
app.use("/comments", ContextComments, commentsRoutes);

app.use("/", function (req, res) {
   res.send("ok");
});

// Run app
app.listen(3000);
