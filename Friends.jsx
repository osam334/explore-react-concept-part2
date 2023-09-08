import { useEffect, useState } from 'react'
import './Friends.css' 

export default function Friends(){

    const  [friend, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => setFriends(data))
    },[])
    return(
        <div className="box">
            <h3>Friends: {friend.length}</h3>
            {
                friend.map(() => <Friends></Friends>)
            }
        </div>




        
    )
}

// 1. state yo hold data
// 2.useEffect with Dependency array
// 3.use fetch to load data
// 4.set loaded data to the state
