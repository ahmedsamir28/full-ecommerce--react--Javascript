import React from 'react'
import prev from '../../Assets/Images/prev.png'
const RightButton = ( onClick, onDisable ) => {
    return (
        <img
            src={prev}
            alt=""
            width="35px"
            onClick={onClick}
            onDisable={onDisable}
            height="35px"
            style={{ float: "right", marginTop: "140px", cursor: "pointer" }}
        />
    )
}


export default RightButton
