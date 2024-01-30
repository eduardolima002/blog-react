  import { useState, useEffect } from "react"
  import blogFetch from '../axios/config'
  import { Link } from "react-router-dom"

  import './Home.css'

  type post = {
    id: number,
    title:string,
    body: string
  }


function Home() {

    const [posts, setPosts] = useState([]);

    const getPosts = async() => {
        try {
            const response = blogFetch.get('/posts')
            const dataJson = (await response).data;
            setPosts(dataJson);
            console.log(dataJson);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts();
    },[]);
    return (
        <div>
            <h1>Ultimos posts</h1>
            {(
                posts.length === 0 ? <p>Carregando...</p> :
                posts.map((post:post) => (
                    <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`posts/${post.id}`} className="btn">Ler mais</Link>
                    </div>
                ))
            )}
        </div>
    )
}

export default Home
