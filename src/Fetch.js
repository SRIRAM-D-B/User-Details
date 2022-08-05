import {useEffect,useState} from 'react'
import axios from 'axios'
import Display from './Display';

let Fetch = ({link}) => {
    let results;
    const [data, setdData] = useState('');
    useEffect(() => {
        axios.get(link).then(result => {
            results = result.data.results;
            results.forEach(iter => {
                iter.amount = {
                    "income" : "$ 100000",
                    "expense" : '0'
                }
            });
            setdData(results);
            localStorage.setItem("locstr", JSON.stringify(results));
        })
    }, [])
    
    return (
        <div>
            <Display/>
        </div>
    )
}

export default Fetch