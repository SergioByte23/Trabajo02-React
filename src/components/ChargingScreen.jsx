import React from 'react'
import './styles/ChargingScreen.css'

const ChargingScreen = () => {
    return (
        <>
            <div className='loading'>
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1 className='loading__title'>Loading....</h1>
            </div>
        </>
    )
}

export default ChargingScreen