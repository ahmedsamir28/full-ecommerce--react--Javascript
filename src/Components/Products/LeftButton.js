import React from 'react'
import next from '../../Assets/Images/next.png'
const LeftButton = ( onClick, onDisable ) => {
    return (
        <img
            src={next}
            alt=""
            width="35px"
            onClick={onClick}
            onDisable={onDisable}
            height="35px"
            style={{ float: "left", marginTop: "140px", cursor: "pointer" }}
        />
    )
}

export default LeftButton
