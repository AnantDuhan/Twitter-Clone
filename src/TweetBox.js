import { Avatar ,Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://yt3.ggpht.com/ytc/AAUvwnjGeMLoQBRFODk5y4Dt8ScDhLi6acP8fvDzl6_CJQ=s900-c-k-c0x00ffffff-no-rj" />
                    <input placeholder="What's Happening?" type="text" />
                </div>                    
                <input 
                className="tweetBox__imageInput" 
                placeholder="Optional: Enter image URL" 
                type="text"/>


                <Button
                type="submit"
                className="tweetBox__tweetButton"
                >
                        Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
