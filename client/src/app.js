import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import rewind from './images/rewind.png'
import useStyles from './styles'

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxwidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image_2} src={rewind} alt="time" height="60"/>
                <Typography className={classes.heading} variant="h2" align="center">Rewind</Typography>
                <img className={classes.image} src={rewind} alt="rewind" height="60"/>
            </AppBar>
            <AppBar className={classes.appBar_2} position="static" color="inherit">
                <Typography className={classes.heading_2} variant="h5" align="center">Take A Walk Down Memeory Lane</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            <AppBar className={classes.appBar_3} position="static" color="inherit">
                <Typography className={classes.heading_2} variant="h5" align="center">Inspired by JavaScript Mastery (No Rights Reserved)</Typography>
            </AppBar>
        </Container>
    );
}

export default App;