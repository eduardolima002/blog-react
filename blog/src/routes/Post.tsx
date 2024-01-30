import {useEffect, useState } from "react";
import blogFetch from "../axios/config";
import { useParams } from "react-router-dom";
type post = {
    id: number,
    title:string,
    body: string
  }
function Post() {
    const {id} = useParams();
    const [post, setPost] = useState<post>();
    const getPost = async ()=>  {
        try {
            const response = await blogFetch.get(`posts/${id}`);
            const data = (await response).data;
            setPost(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPost()
    }, []);

    return (
        <div>
            {(post == undefined ? <p>Post não encontrado</p> :
               <>
                    <h2>Titulo:</h2>
                    <p>{post.title}</p>
                    <h2>Corpo do post:</h2>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    )

}

export default Post;