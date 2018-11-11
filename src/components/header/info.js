import React, { Component } from 'react';
import {InfoItem} from './info/infoItem';

const INFO_ITEMS = ['posts', 'followers', 'following'];

export const Info = (props) => {
    return (
        <div className="info-wrapper">
            {
                INFO_ITEMS.map((item, index) => {
                    return (
                        <InfoItem value={props[item]} title={item} key={item} />
                    )
                })
            }
        </div>
    )
}