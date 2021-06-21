import { Avatar ,Button } from '@material-ui/core';
import React, { useState } from 'react';
import db from './firebase';
import './TweetBox.css';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Anant Duhan",
            username: "duhan_anant",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://yt3.ggpht.com/ytc/AAUvwnjGeMLoQBRFODk5y4Dt8ScDhLi6acP8fvDzl6_CJQ=s900-c-k-c0x00ffffff-no-rj"
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://yt3.ggpht.com/ytc/AAUvwnjGeMLoQBRFODk5y4Dt8ScDhLi6acP8fvDzl6_CJQ=s900-c-k-c0x00ffffff-no-rj" />
                    <input 
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's Happening?" 
                        type="text" 
                    />
                </div>                    
                <input 
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput" 
                    placeholder="Optional: Enter image URL" 
                    type="text"
                />

                <Button
                onClick={sendTweet}
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
