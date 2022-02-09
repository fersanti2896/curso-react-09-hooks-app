import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import '../04-useRef/effects.css'

export const MemoHook = () => {
    const {counter, increment} = useCounter(500);
    const [show, setShow] = useState(true);

    /* Recibe una función y una dependencia */
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <>
            <div>
                <h1>MemoHook</h1>
                <hr />

                <h3>Counter: <small>{ counter }</small></h3>
                <p>{ memoProcesoPesado }</p>
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
