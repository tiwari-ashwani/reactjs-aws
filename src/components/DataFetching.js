import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

    //const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromBtnClick, setIdFromBtnClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
            // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            //axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(error => {
                console.log(error)
            }
            )
    }, [idFromBtnClick])

    const clickHandler = () => {
        setIdFromBtnClick(id)
    }

    return (
        <div>
            <input
                type='text'
                value={id}
                onChange={e => setId(e.target.value)} 
            />
            <br />
            <button
                onClick={clickHandler}>
                Fetch Post Call
            </button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id} > {post.title} </li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
