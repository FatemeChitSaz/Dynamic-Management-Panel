import { useEffect, useState } from "react"

export const useGetData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch(url)
        .then((res) => {
            if (!res.ok) throw new Error("حطا در دریافت اطلاعات");
            return res.json();
        })

        .then((data) => {
            setLoading(false);
            setData(data);
        })

        .catch((err) => {
            setLoading(false);
            setError(err.message)
        });
    }, [url]);

    return {data, loading, error};
}
