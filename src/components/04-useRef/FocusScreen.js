import React, { useRef } from 'react';
import './effects.css'

export const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <>
            <div>
                <h1>Focus Screen</h1>
                <hr />

                <input 
                    ref={ inputRef }
                    className='form-control'
                    placeholder='Tu nombre...'
                />

                <button className='btn btn-outline-primary mt-4'
                        onClick={ handleClick }
                >
                    Focus
                </button>
            </div>
        </>
    );
};
