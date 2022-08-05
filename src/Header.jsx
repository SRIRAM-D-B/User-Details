import {useState} from 'react'
import './style.css'

function Header({info}) {
    const [name, setName] = useState("");
    // console.log(name);
    let searchName = () => {
        let searchedData = info.filter((obj) => (obj.name.first === name))
        setName(searchedData);
        localStorage.setItem('locstr', JSON.stringify(searchedData));
    }
    return (
        <div>
            {
                <form className="search p-5 gap-3">
                    <input className="border-radius input" type="text" placeholder='User-Name' onChange={(e) => setName(e.target.value)}/>
                    <button className="btn" onClick={() => searchName()}>Submit</button>
                </form>
            }
        </div>
    )
}

export default Header