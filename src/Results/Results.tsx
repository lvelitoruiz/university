import React, { useEffect } from 'react'
import {
    useHits,
    UseHitsProps,
} from 'react-instantsearch-hooks-web';

const Results = (props: UseHitsProps) => {
    const { hits } = useHits(props);

    useEffect( () => {
        console.log('***** hits ***** ',hits)
    },[hits]);

    return (
        <div>
            {
                hits.map( (hit: any,index) => {
                    return (
                        <div key={index}>
                            { hit?.description }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Results