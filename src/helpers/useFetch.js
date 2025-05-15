import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function useFetch(url) {
    const [data, setdata] = useState([]);

    let fetchData = async () => {
        try {
            await axios.get(url).then((result) => {
                setdata(result?.data)
            })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url]);

    return { data }
}
