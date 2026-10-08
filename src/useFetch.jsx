import { useEffect, useState } from 'react';


const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPinding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const aborcont = new AbortController();
    const timer = setTimeout(() => {



      fetch(url, {
        signal: aborcont.signal
      })


        .then(res => {
          if (!res.ok) {
            throw Error('here is an error dear nwrs');
          }

          return res.json();
        })
        .then(data => {
          setData(data);
          setIsPinding(false);
          setError(null)
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setIsPinding(false);
            setError(err.message);

          }
        });
    }, 1000);

    return () => {
      clearTimeout(timer);
      aborcont.abort();
    };

  }, [url]);

  return { data, isPending, error };
};

export default useFetch;