import PostMessages from "../models/postMessages.js";



export const getPost  = async (req , res)=> {
    try {

        const postMessage = await PostMessages.find();

        res.status(200).json(postMessage);
        
    } catch (error) {
        res.status(404).json({ message : error.message})
    }
};


export const creatPost  = async (req , res)=> {
    // we call our req body 
    const post  = req.body;
    // then we send recived data as a new post to our schema 
    const newPost = new PostMessages(post);
    try {
        // if the req is succesed we save the data
      await  newPost.save();
      // then we respond sending the data recived and saved
      res.status(201).json(newPost);
          
    } catch (error) {
        res.status(409).json({ message : error.message})
    }
};