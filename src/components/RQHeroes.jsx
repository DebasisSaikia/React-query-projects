import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query'

const RQHeroes = () => {

    const { data, isLoading, isError } = useQuery('heroes', () => {
        return axios.get(`http://localhost:4000/superheroes`)
    });
    if (isLoading) {
        return <h1>Loading....</h1>
    }

    if (isError) {
        return <h1>Error</h1>
    }
    return (
        <>
            <h2>RQ super heroes</h2>
            {data?.data?.map((hero, ind) => (
                <div key={ind}>{hero?.name}</div>
            ))}
        </>
    )
}

export default RQHeroes