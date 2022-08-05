import {useState} from 'react'

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
                <form>
                    <input type="text" placeholder='User-Name' onChange={(e) => setName(e.target.value)}/>
                    <button onClick={() => searchName()}>Submit</button>
                </form>
            }
        </div>
    )
}

export default Header