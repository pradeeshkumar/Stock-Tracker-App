export const helloworld = (props) => {
    return (
        <>
        <div>
            {props.message}
        </div>
        </>
    )
};

export async function gethelloworld() {
    const res = await fetch("https://dainty-licorice-4d88aa.netlify.app/.netlify/functions/hello");
    const result = await res.json;
    console.log(result);
    return {
        props: {
            message: result.message
        }
    }
}

export default helloworld;