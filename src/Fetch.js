import {useEffect,useState} from 'react'
import axios from 'axios'
function Fetch({link}) {
    useEffect(() => {
        axios.get(link).then(result => {
            console.log(result);
        })
    }, [])
    
    return (
        <div>Fetch</div>
    )
}

export default Fetch