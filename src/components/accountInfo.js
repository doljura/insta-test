import React, { Component } from 'react';

export const AccountInfo = (props) => {
    return (
        <div className={`account-info ${props.isSmallScreen ? 'small' : ''}`}>
            <div>{props.title}</div>
            <div>Sports Team</div>
            <div>
                <span>Follow our </span>
                <a href="#">#Treble99</a>
                <span> journey on </span>
                <a href="#">#MUTV</a>
            </div>
        </div>
    )
}