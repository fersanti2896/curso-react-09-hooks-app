import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './effects.css'

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = (!loading && data.length > 0) && data[0];
    
    return (
        <>
            <div>
                <h1>Breaking Bad Quotes</h1>
                <hr />

                { loading 
                    ? ( <div className="alert alert-info text-center">Loading...</div> )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-0">{ quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    ) 
                }
                <button onClick={increment}
                        className='btn btn-primary'>
                        Next quote
                </button>
            </div>
        </>
    );
};
