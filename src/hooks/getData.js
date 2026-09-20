// import { useEffect, useState } from "react";
import { useEffect, useReducer } from "react";


// loading is true because of the logic of first loading. when the first loading will happen then the loading state should be true
const initialState = {data: null, loading: true, error: null};

const fetchReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
           return {...state, loading: true, error: null };
        case "FETCH_SUCCESFUL":
            return {data: action.payload, loading: false, error: null};
        case "FETCH_ERROR":
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}



export const useGetData = (fetchFn) => {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    const [state, dispatch] = useReducer(fetchReducer, initialState);


    // useEffect(() => {
    //      setLoading(true);
    //      setError(null);

    //     fetchFn()
    //         .then((result) => {
    //              setData(result);
    //              setLoading(false);
    //         })
    //         .catch((err) => {
    //              setError(err.message);
    //              setLoading(false);
    //         });
    // }, [fetchFn]);


    useEffect (() => {
        let ignore = false;
        dispatch ({type: "FETCH_START"})

        fetchFn()
            .then((result) => {
                if (!ignore) dispatch({type: "FETCH_SUCCESFUL", payload: result});
            })
            .catch((err) => {
                if (!ignore) dispatch({type: "FETCH_ERROR", payload: err})
            });

        return () => {
            ignore = true;
        };
    }, [fetchFn])

    return state;
};