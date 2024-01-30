import blogFetch from "../axios/config"

import { useState } from "react"

import { useNavigate } from "react-router-dom"

import "./NewPost.css"

function Home() {
    const navigate = useNavigate();

    const [title, setTitle] = useState<string>();
    const [body, setBody] = useState<string>();

    const createPost = async (e:any) => {
        e.preventDefault();

        console.log(title, body);

        const post = {title, body, userId: 1};

        await blogFetch.post("/posts", {
            body: post
        })

        navigate('/');
    }
    return (
        <div className="new-post">
            <h2>Inserir novo Post:</h2>
            <form onSubmit={(e) => createPost(e)}>
                <div className="form-control">
                    <label htmlFor="title">Titulo:</label>
                    <input id="title" type="text" name="title" placeholder="Digite o titulo" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="body">Titulo:</label>
                    <textarea name="body" id="body" placeholder="Digite o conteúdo" onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <input type="submit" value="Criar Post" className="btn" />
            </form>

        </div>
    )
}

export default Home
