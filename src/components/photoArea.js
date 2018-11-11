import React, { Component } from 'react';
import {PhotoRow} from './photoArea/photoRow';

const COL_NUMBER = 3;

export const PhotoArea = (props) => {
    return (
        <div className="photo-area">
            {
                props.data.map((item, index) => {
                    if(!(index%COL_NUMBER)) {
                        return (
                            <PhotoRow rowData={props.data.slice(index, index+COL_NUMBER)} key={`photo-row-${index}`}></PhotoRow>
                        )
                    }
                })
            }
        </div>
    )
}