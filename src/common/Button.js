const Button=({name="button",height="40px",backgroundColor="black",width="40px",
color="white",textAlign="center",cssStyle={}})=>{
    return(
        <>
            <button style={{height,width,backgroundColor,textAlign,color,...cssStyle}}>{name}</button>
        </>
    );
}

export default Button;