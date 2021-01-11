import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setCounter] =  useState({
        counter1 : 10,
        counter2 : 20,
        counter3 : 30,
        counter4 : 40,
    })

    const {counter1, counter2} = state;
    return (
        <div className="p-5">
            <h1>Counter1 {counter1} </h1>
            <br></br>
            <h1>Counter2 {counter2} </h1>
            <hr></hr>
            <button 
                className = "button is-success is-ligh"
                onClick = {
                    ()=>{
                        setCounter({
                           ...state,
                           counter1:  counter1 + 1
                            
                        })
                    }
                }
            >
                +1
            </button>
        </div>
    )
}
 