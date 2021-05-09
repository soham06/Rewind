import React from 'react'
import { useState } from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbsUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import useStyles from './styles'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from "@material-ui/core/IconButton";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { deletePost, likePost, dislikePost, lovePost } from '../../../actions/posts'

const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState()

    const changeState = () => {
        if(clicked === true) {
            setClicked(false)
        } else {
            setClicked(true);
        }
    }

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.imageFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.overlay4}>
            <Typography style={{textTransform: 'none', fontSize: '16px', color:'white'}} variant="body2" color="default">{post.location}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.hashtags.map((hashtag) => `#${hashtag} `)}</Typography>
            </div>
            <div className={classes.overlay3}>
                <IconButton style={{color: 'yellow'}} onClick={() => changeState()}>
                    {clicked ? <BookmarkIcon /> : <BookmarkBorderIcon /> }
                </IconButton>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbsUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(dislikePost(post._id))}>
                    <ThumbDownIcon fontSize="small" />
                    &nbsp; Dislike &nbsp;
                    {post.dislikeCount}
                </Button>
            </CardActions>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(lovePost(post._id))}>
                    <FavoriteIcon fontSize="small" />
                    &nbsp; Love &nbsp;
                    {post.loveCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
            
        </Card>
    );
}

export default Post;