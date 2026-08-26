import { useEffect, useState } from "react";

export const useGetData = (fetchFn) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetchFn()
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [fetchFn]);

    return { data, loading, error };
};