import React, { Component } from 'react';
import {Logo} from './header/logo';
import {Info} from './header/info';
import {Round} from '../containers/round';
import {Buttons} from './header/buttons';
import {AccountInfo} from './accountInfo';

export const Header = (props) => {
    console.log(props);
    return (
        <div className="header">
            <div className="header__logo-container">
                <Round>
                    <Logo logo={props.info.logo}/>
                </Round>
            </div>
            <div className="header__info-container">
                <Info {...props.info} />
                <Buttons />
                {
                    !props.isSmallScreen && (
                        <AccountInfo title={props.info.title} isSmallScreen={props.isSmallScreen}></AccountInfo>
                    )
                }
            </div>
        </div>
    )
}