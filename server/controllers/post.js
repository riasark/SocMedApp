import Post from "../models/Post";

export const newPost = async (req, res) => {
    try {
        const { author, content, hobby } = req.body;
        const timestamp = new Date();
        const post = new Post({
            timestamp: timestamp,
            author, 
            likes: 0, 
            comments: [], 
            is_quote: false, 
            quote_id: author, 
            hobby, 
            content
        })
        await post.save();
        const feed = await Post.find({hobby})
        res.json(feed)
    } catch(err){
        res.json({message: err.message})
    }
}

export const doublePost = async (req, res) => {
    try {
        const{ author, quote_id, content, hobby } = req.body;
        const timestamp = new Date();
        const newDouble = new Post({
            timestamp: timestamp,
            author, 
            likes: 0, 
            comments: [],
            is_quote: true,
            quote_id, 
            hobby, 
            content
        })
        await newDouble.save();
        const feed = await Post.find({hobby});
        res.json(feed);
    } catch(err){
        res.json({message: err.message});
    }
}

export const hobbyFeed = async(req, res) => {
    try {
        const { hobby } = req.body;
        const hobbyposts = await Post.find({ hobby });
        res.json(hobbyposts);
    }catch(err){
        res.json({message: err.message});
    }
}

export const userFeed = async (req, res) => {
    try {
        const { author } = req.body;
        const userfeed = await Post.find({ author });
        res.json(userfeed);
    }catch(err){
        res.json({message: err.message});
    }
}
