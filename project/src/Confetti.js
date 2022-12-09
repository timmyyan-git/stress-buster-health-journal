import React, {useState, useEffect} from 'react'
import ReactConfetti from 'react-confetti'

const Confetti = () =>
{
    const [dimension, setDimension] = useState({width: window.innerWidth, height: window.innerHeight});
    
    return (
        <ReactConfetti 
        width= { 100}
        height= {100} />
    )
}

export default Confetti