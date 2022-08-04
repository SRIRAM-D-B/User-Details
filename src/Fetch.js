import {useEffect,useState} from 'react'
import axios from 'axios'
function Fetch({link}) {
    let results;
    const [data, setdData] = useState(JSON.parse(localStorage.getItem("locStr")));
    useEffect(() => {
        axios.get(link).then(result => {
            results = result.data.results;
            setdData(results);
            localStorage.setItem("locstr", JSON.stringify(results));
        })
    }, [])
    
    return (
        <div>Fetch</div>
    )
}

export default Fetch