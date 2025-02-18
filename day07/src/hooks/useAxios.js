import { useEffect, useState } from 'react';
import axios from 'axios';

export const useAxios = (urlVal = []) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        axios
            .get(urlVal)
            .then((res) => {
                setData(res.data);
                setLoading(true);
                setError(null);
            })
            .catch((error) => {
                setData([]);
                setLoading(false);
                setError(error);
            });
    };
    useEffect(() => {
        getData();
    }, [urlVal]);

    return { data, loading, error };
};
