import React from 'react';
import {gethelloworld} from '../api/helloworld';
function invokefunction(){

    gethelloworld();
  
  }
export const Details = (props) => {
    return (
        <>
        <div>
        {invokefunction()}
        </div>
        </>
    )
};
export default Details;