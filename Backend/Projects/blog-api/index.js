import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store
let posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
  },
];

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//

//CHALLENGE 1: GET All posts
app.get("/", (req,res)=>{
  res.json(posts);
});

//CHALLENGE 2: GET a specific post by id
const postId = parseInt(req.param.id);
app.get("/:id", (req,res)=>{
  const postId = parseInt(req.param.id);
  const post = posts.find((p)=> p.id === postId);
   if (!post) return res.status(404).send("Not Found");
   res.json(post);
});


//CHALLENGE 3: POST a new post
 app.post("/", (res,req)=> {
  const {title, content, author, date} =req.body;
  const postId = parseInt(req.param.id);

  res.status(201).json({message: 'Post created successfully'});
 });

//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/:id", (res,res)=>{
  const id = parseInt(req.param.id);
  const postId = parseInt(req.param.id);

  const updatedPatch = req.body;
  const post = post.find((p)=> p.id === postId)
   if(!post) {
    return res.status(404).json({ error: 'Post not Found'});
   }
  if(updatedPatch.title){
    post.title = updatedPatch.title;}
    if (updatedPatch.content) {
      post.content= updatedPatch.content;
    }
    if (updatedPatch.author) {
     post.author = updatedPatch.author;
   }
   if(updatedPatch.date){
    post.date = updatedPatch.date;
   }
   return res.status(200).json({ message: 'Post updated successfully', updatedPost: post });
  });

//CHALLENGE 5: DELETE a specific post by providing the post id.
app.delete( "/:id" , (req,res)=> {
  const id = parseInt(req.param.id);
  const postId = parseInt(req.param.id);
    const postIndex = post.findIndex((p)=> p.id = postId);
    if (postIndex === -1) {
      app.status(404).json("no post found");
      } else{
        posts.splice(postIndex, 1);
        res.status(200).send('Deleted Successfully');
       
    }
  });


app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
