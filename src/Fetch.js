import {useEffect,useState} from 'react'
import axios from 'axios'
import Display from './Display';
import Header from './Header';

let Fetch = ({link}) => {
    let results;
    const parsedData = JSON.parse(localStorage.getItem('locstr') || "[]")
    const [data, setdData] = useState(parsedData);
    useEffect(() => {
        if(!localStorage.getItem("locstr"))
        {
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
        }
        else
        {
            setdData(parsedData);
        }
    }, [])
    
    return (
        <div>
            <Header info={data}/>
            <Display info={data}/>
        </div>
    )
}

export default Fetch