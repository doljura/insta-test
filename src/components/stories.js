import React, { Component } from 'react';
import {Round} from '../containers/round';
import {Story} from './stories/story';

export const Stories = (props) => {
    return (
        <div className="stories">
            {
                props.stories.map((item, index) => {
                    return (
                        <Round className="round-story" key={`story_${index}`}>
                            <Story story={item}></Story>
                        </Round>
                    )
                })
            }
        </div>
    )
}