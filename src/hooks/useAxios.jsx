import React, { useEffect, useState } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'https://opentdb.com/'

function useAxios({ url }) {
    const [response, SetResponse] = useState(null)
    const [error, SetError] = useState('')
    const [loading, SetLoading] = useState(true)

    useEffect(() => {
        const fetchData = ()=>{
            axios.get(url).then(res => SetResponse(res.data)).catch(err => SetError(err)).finally(() => SetLoading(false));
        }
        fetchData();
    }, [url]);

    return { response, error, loading }
}

export default useAxios