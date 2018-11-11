import React, { Component } from 'react';

export const InfoItem = (props) => {
    return (
        <div className="info-item">
            <div>{props.value}</div>
            <div>{` ${props.title}`}</div>
        </div>
    )
}