import { useState } from 'react';
import axios from 'axios'

function App() {
    const [ post, setPost ] = useState({
        user_id: '',
        image: '',
        title: '',
    })

    const api = axios.create({
        baseURL: 'http://localhost:8000'
    })

    const createPost = async (PostData) => {
        try {
            const response = await api.post('/post/', PostData)
            return response.data
        } catch (e) {
            throw e
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await createPost(post)
        console.log(response)
    }

    const handleChange = e => {
        const {value, name } = e.target

        setPost( prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <form className = 'create-form' onSubmit = {handleSubmit}>
                <input type = 'text'
                    placeholder = 'user_id'
                    name = 'user_id'
                    value = {post.user_id}
                    onChange={handleChange}
                />
                <input type = 'text'
                    placeholder = 'image'
                    name = 'image'
                    value = {post.image}
                    onChange={handleChange}
                />
                <input type = 'text'
                    placeholder = 'title'
                    name = 'title'
                    value = {post.title}
                    onChange={handleChange}
                />
                <input type='submit' value='submit'/>
            </form>
        </>
    );
}

export default App;
