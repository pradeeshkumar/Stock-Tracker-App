import React from 'react';
export const Details = (props) => {
    return (
        <>
        <div>
            
        </div>
        </>
    )
};
export async function gethelloworld() {
    const res = await fetch("https://dainty-licorice-4d88aa.netlify.app/.netlify/functions/hello");
   const result = await res.json();
    console.log(result.message);
    return result.message
    
}
export default Details;