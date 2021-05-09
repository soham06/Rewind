import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import useStyles from './styles'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', location: '', hashtags: '', imageFile: '' });
    const classes = useStyles();
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if (post) setPostData(post)
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', location: '', hashtags: '', selectedFile: '' });
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
            clear();
        } else {
            dispatch(createPost(postData));
            clear();
        }
    };

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography className={classes.heading} variant="h6">{currentId ? 'Editing' : 'Creating' } a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                <TextField name="location" variant="outlined" label="Location" fullWidth value={postData.location} onChange={(e) => setPostData({ ...postData, location: e.target.value })}/>
                <TextField name="hashtags" variant="outlined" label="Hashtags" fullWidth value={postData.hashtags} onChange={(e) => setPostData({ ...postData, hashtags: e.target.value.split(',') })}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multuple={false} onDone={({base64}) => setPostData({ ...postData, imageFile: base64 })}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.buttonClear} variant="contained" color="secondary" size="medium" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;
