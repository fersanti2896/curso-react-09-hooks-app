import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
    /* La idea del isMaounted es que mantenga la referencia cuando el hook está vivo 
        o el componente siga montado, cuando se cambie los valores del isMounted
        no se quiere lanzar una renderización del componente, sino solo mantener la referencia */
    const isMounted = useRef(true);

    const [state, setState] = useState({ 
        data: null, 
        loading: true,
        error: null
    });

    useEffect(() => {
        return () => {
            isMounted.current = false
        };
    }, []);
    

    useEffect(() => {
        setState({
            data: null, 
            loading: true,
            error: null
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if(isMounted.current) {
                    setState({
                        loading: false,
                        error: null, 
                        data
                    });
                }
            });
    }, [url]);
    
    return state;
};
