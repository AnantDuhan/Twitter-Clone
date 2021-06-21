import React from 'react';
import './Post.css';
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://yt3.ggpht.com/ytc/AAUvwnjGeMLoQBRFODk5y4Dt8ScDhLi6acP8fvDzl6_CJQ=s900-c-k-c0x00ffffff-no-rj" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Anant Duhan <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge"/> @duhan_anant
                            </span>
                        </h3>
                    </div>
                    <div className="header__description">
                        <p>I challenge you to become a SDE at top MNC</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/QNFhOolVeCzPQ2Mx85/giphy.gif" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
