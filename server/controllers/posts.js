import PostMessage from '../models/postMessage.js'
import mongoose from 'mongoose';

export async function getPosts (req, res) {
    try {
        const postMessages = await PostMessage.find()
        console.log(postMessages)

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
};

export async function createPosts (req, res) {
    const post = req.body;
    console.log(post)
    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)                        
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
};

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const newPost = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Invalid Id')

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...newPost, _id }, {new:true} )

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Invalid Id')

    await PostMessage.findByIdAndRemove(id);

    res.json({message: 'Post Deleted Successfully'});
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Invalid Id')

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1}, { new: true });

    res.json(updatedPost);
}

export const dislikePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Invalid Id')

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { dislikeCount: post.dislikeCount + 1}, { new: true });

    res.json(updatedPost);
}

export const lovePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Invalid Id')

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { loveCount: post.loveCount + 1}, { new: true });

    res.json(updatedPost);
}
