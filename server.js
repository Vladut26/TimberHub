import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { v4 as uuid } from "uuid";
import express from "express";
import Sequelize from "sequelize";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// const autoID=[uuid(),uuid(),uuid(),uuid()]

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "timberhub.db",
  define: {
    timestamps: false,
  },
});

const Post = sequelize.define("post", {
  PID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  // UID: {
  //   type: Sequelize.UUID,
  //   allowNull: false,
  //   // foreignKey: true
  // },
  imgURL: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: Sequelize.STRING,
  likeNr: Sequelize.INTEGER,
});

const samplePosts = [
  {
    PID: uuid(),
    // UID:autoID[0],
    imgURL:
      "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41477-019-0374-3/MediaObjects/41477_2019_374_Figa_HTML.jpg",
    description: "The green forest",
    username: "Vlad",
    likeNr: 10,
  },
  {
    PID: uuid(),
    // UID:autoID[0],
    imgURL:
      "https://cdn.shopify.com/s/files/1/0447/0453/articles/Aduna_baobab_tree_8b843446-b19c-49fd-b84c-2b5d5b4c561a.jpg?v=1578334489",
    description: "The baubaba",
    username: "Vlad",
    likeNr: 100,
  },
  {
    PID: uuid(),
    // UID:autoID[0],
    imgURL: "https://caon.ro/wp-content/uploads/2023/01/nuc.jpg",
    description: "The Walnut tree",
    username: "Vlad",
    likeNr: 4,
  },
  {
    PID: uuid(),
    // UID:autoID[2],
    imgURL:
      "https://fermaiancu.ro/wp-content/uploads/2017/08/27.-Malus-Royalty-Mar-decorativ.jpg",
    description: "The best apple pie comes from the best apple tree",
    username: "Gabi",
    likeNr: 25,
  },
  {
    PID: uuid(),
    // UID:autoID[2],
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqpDhK5d0YyNgnQvFSvsYJZYGBJw6fAgnkuw&usqp=CAU",
    description:
      "A tranquil scene, surrounded by the quiet beauty of nature's green canopy.",
    username: "Gabi",
    likeNr: 45,
  },
  {
    PID: uuid(),
    // UID:autoID[2],
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIAa2vEHv8KMlWuqQIQbpbzeFOghBEYF1qQ&usqp=CAU",
    description:
      "Nature's tales unfold in the rustling leaves, capturing moments of serene landscapes",
    username: "Gabi",
    likeNr: 21,
  },
  {
    PID: uuid(),
    // UID:autoID[1],
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmz0DgqjzKq3c1aZPZa16_x_CnwTeGBfviAg&usqp=CAU",
    description:
      "Soft sunlight filters through the branches, creating a calm and picturesque atmosphere.",
    username: "Andrei",
    likeNr: 24,
  },
  {
    PID: uuid(),
    // UID:autoID[1],
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_Kg8c6IMPa_aHJTtqXpQkRynVNIJPXiWOw&usqp=CAU",
    description:
      "Standing tall, these ancient trees hold stories and wisdom from times long gone.",
    username: "Andrei",
    likeNr: 33,
  },
  {
    PID: uuid(),
    // UID:autoID[3],
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1sG9S5Az_YF2xeoz3WaJGUyATOLT5Kw9TGQ&usqp=CAU",
    description:
      "In their graceful presence, trees stand as living art, inviting exploration and reflection.",
    username: "Cipi",
    likeNr: 90,
  },
];

await sequelize.sync({
  // force: true,
  alter: true,
});

{
  // const User = sequelize.define("user", {
  //   UID: {
  //     type: Sequelize.UUID,
  //     defaultValue: Sequelize.UUIDV4,
  //     allowNull: false,
  //     primaryKey: true,
  //   },
  //   usern: {
  //     type: Sequelize.STRING,
  //     allowNull: false,
  //   },
  //   friends: {
  //     type: Sequelize.STRING(1000),
  //     allowNull: false,
  //     defaultValue: ''
  //   },
  //   password: {
  //     type: Sequelize.STRING(64),
  //     validate: {
  //       is: /^[0-9a-f]{64}$/i,
  //     },
  //     allowNull: false,
  //   },
  // });
  // const sampleUsers = [
  //   {
  //     UID: autoID[0],
  //     usern: "Vlad",
  //     friends: ["Gabi", "Cipi"],
  //     password: "vlvl2",
  //   },
  //   {
  //     UID: autoID[1],
  //     usern: "Andrei",
  //     friends: ["Gabi", "Vlad"],
  //     password: "imiplacemaneaua",
  //   },
  //   {
  //     UID: autoID[2],
  //     usern: "Gabi",
  //     friends: ["Vlad", "Andrei", "Cipi"],
  //     password: "22qwer44",
  //   },
  //   {
  //     UID: autoID[3],
  //     usern: "Cipi",
  //     friends: ["Vlad", "Gabi"],
  //     password: "1234567890",
  //   },
  // ];
  // User.hasMany(Post)
  // try {
  //   await User.bulkCreate(sampleUsers);
  //   console.log("Users loaded in DB");
  // } catch (error) {
  //   console.log("users already loaded");
  // }
  // User.hasMany(Post,{
  //   // as: 'parentChildren',
  //   foreignKey: { field: 'UID', allowNull: false },
  //   constraints: true,
  //   onDelete: 'CASCADE'
  // })
  // Post.belongsTo(User);
}

// try {
//     await Post.bulkCreate(samplePosts);
//     console.log("Posts loaded in DB");
//   } catch (error) {
//     console.log("posts already loaded");
// }

app.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const posts = await Post.findAll();
    // res.status(200).json(posts)
    res.render("index", { posts, username });
    console.log("On the homepage!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "an error has occured" });
  }
});
app.get("/timberhub/:username", async (req, res) => {
  const { username } = req.params;
  res.render("index", { username });
  console.log("On the homepage!");
});

app.get("/profile/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const posts = await Post.findAll({ where: { username } });
    // res.status(200).json(posts)
    res.render("profile", { posts, username });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "an error has occured" });
  }
});
app.get("/:PID/edit", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.PID);
    if (post) {
      res.render("edit", { post });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.warn(error);
    res.status(500).json({ message: "Server error" });
  }
});
app.post("/:PID/edit", async (req, res) => {
  try {
    let post = await Post.findByPk(req.params.PID);
    if (post) {
      await post.update(req.body);
      res.redirect(`/profile/${post.username}`);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.warn(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const { imgURL, description } = req.body;
    await Post.create({ imgURL, description, likeNr: 0, username });
    // res.status(201).json({ message: 'added post' })
    res.redirect(`/profile/${username}`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "an error has occured" });
  }
});

app.delete("/delete/:PID", async (req, res) => {
  try {
    let post = await Post.findByPk(req.params.PID);
    if (post) {
      await post.destroy();
      res.status(202).json({ message: "accepted" });
    } else {
      res.status(404).json({ message: "not found" });
    }
  } catch (e) {
    console.warn(e);
    res.status(500).json({ message: "server error" });
  }
});

app.listen(6060, () => {
  console.log("Listening on port 6060");
});
