import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Card from './Card';

// 

const Character = () => {
    const [page, setPage] = useState(1)
    const fetchData = async ({ queryKey }) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
        return response.json()
    }

    const { data, status } = useQuery(['characters', page], fetchData, {
        keepPreviousData: true
    });

    if (status === "error") {
        return <h1>Error....</h1>
    }
    if (status === "loading") {
        return <h1>Loading</h1>
    }

    return (
        <>
            <div className="characters">
                {data.results.map((character) => (
                    <Card character={character} />
                ))}
                <div>
                    <button
                        onClick={() => setPage((old) => Math.max(old - 1, 1))}
                        disabled={page === 1}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setPage((old) => old + 1)}
                        disabled={!data.info.next}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default Character;