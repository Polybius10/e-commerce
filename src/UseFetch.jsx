import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect (() => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
            .finally(() => console.log('terminó'))
    },[]);
    if (!data) {
      return <div className='text-3xl bg-black text-white'>Loading...</div>
    }

  return {data, loading, error};
}
