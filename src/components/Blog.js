/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Blog = () => {
    //Css
    const body = css`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .blogpost{
        width: 32%;
        >div {
            margin-bottom: 2em;
        }
        >h3 {
            margin-bottom: 0.7em;
        }
        .pink{
            color: #ff2a70;
            margin-bottom: 1.2em;
        }
        .content {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3; /* number of lines to show */
            line-clamp: 3; 
            -webkit-box-orient: vertical;
    }
    }
    `
    //JS
    const [blog, setBlog] = useState();
    useEffect(() => {
        axios('http://localhost:4000/blogposts')
        .then(result => {
            setBlog(result.data);
        })
    }, []);
    return (
        <div css={body}>
            {blog?.map(item => (
                <div className="blogpost" key={item.id}>
                    <div>
                        <img src={item.asset.url} alt={item.title} />
                    </div>
                    <h3>{item.title}</h3>
                    <p className="pink">BY: {item.author} / 3 Comments / date</p>
                    <p className='content'>{item.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Blog;