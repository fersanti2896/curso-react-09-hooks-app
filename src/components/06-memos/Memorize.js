import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../04-useRef/effects.css'

export const Memorize = () => {
    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <>
            <div>
                <h1>Memorize</h1>
                <hr />

                <h2>Counter: <Small value={ counter }/></h2>
                <button 
                    onClick={ increment }
                    className='btn btn-outline-primary mt-4'
                >
                    +1
                </button>
                <button
                    className='btn btn-outline-primary mt-4 ms-3'
                    onClick={() => {
                        setShow(!show);
                    }}
                >
                    Show/Hide { JSON.stringify(show) }
                </button>
            </div>
        </>
    );
};
