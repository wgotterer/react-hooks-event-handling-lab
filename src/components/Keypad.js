
function Keypad(){

function handleEventChange(event){
    console.log("Entering password...")

}

    return(
        <>
       <input onChange={handleEventChange} type="password" />
        </>
    )
}

export default Keypad;