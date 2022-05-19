import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query'

const RQHeroes = () => {

    const { data, isLoading, isError, error, refetch, isFetching } = useQuery('heroes', () => {
        return axios.get(`http://localhost:4000/superheroes`)
    }, { refetchOnMount: true, refetchInterval: 1500, enabled: false });

    if (isLoading, isFetching) {
        return <h1>Loading....</h1>
    }

    if (isError) {
        return <h2>
            {error}
        </h2>
    }
    return (
        <>
            <h2>RQ super heroes</h2>
            <button onClick={refetch}>Refetch</button>
            {data?.data?.map((hero, ind) => (
                <div key={ind}>{hero?.name}</div>
            ))}
        </>
    )
}

export default RQHeroes