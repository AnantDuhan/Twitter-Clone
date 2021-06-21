import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" /> 
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>

                <TwitterTweetEmbed 
                    tweetId={"1336931003277979648"}
                />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="duhan_anant"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://www.facebook.com/AnantDuhan12"}
                    options={{ text: "#reactjs is awesome", via: "duhan_anant"}}
                />
                
            </div>
        </div>
    );
}

export default Widgets
