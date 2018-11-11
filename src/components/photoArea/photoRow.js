import React, { Component } from 'react';
import {Photo} from './photo';

export const PhotoRow = (props) => {
    return (
        <div className="photo-row">
            {
                props.rowData.map((item, index) => {

                    return (
                        <Photo value={item} key={`row_${index}`}></Photo>
                    )
                })
            }
        </div>
    )
}