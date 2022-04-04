/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel'
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

const Testemonials = () => {
    //Css
    const body = css`
        width: 70%;
        margin: 0 auto;
        z-index: -1;
        .all {
        }
        .image{
            width: 20%;
            margin:0 auto 1em;
            img {
            }
        }
        .name{
            text-align: center;
            font-weight: 500;
            margin-bottom: 1em;
        }
        .content{
            text-align: center;
        }
        .links{
            margin: 2em auto 0;
            width: 150px;
            display: flex;
            justify-content: space-between;
            a{
                font-size: 1.1em;
                border: solid #fff 2px;
                padding: 0.4em;
            }
        }
        .rec-pagination {
        button{
            border-radius: 0;
            box-shadow: none;
            border: solid 1px #fff;
            background: #fff;
        }
        
        .rec-dot_active {
            background-color: #ff2a70;
            border: solid 1px #ff2a70;
        }
    `
    
    const [testemonial, setTestemonial] = useState();
    useEffect(() => {
        axios('http://localhost:4000/testimonials')
        .then(result => 
            setTestemonial(result.data))
    }, []);
    return (
        <div css={body}>
            <Carousel itemsToShow={1} enableMouseSwipe={false} showArrows={false} itemsToScroll={2} itemPadding={[15]}>
            {testemonial?.map(item => (
                <div key={item.id} className="all">
                    <div className="image">
                        <img src={item.asset.url} alt={item.name} />
                    </div>
                    <p className='name'>{item.name}</p>
                    <p className="content">{item.content}</p>
                    <div className='links'>
                        <a target="_blank" rel="noreferrer" href={item.facebook}><FaFacebookF/></a>
                        <a target="_blank" rel="noreferrer" href={item.twitter}><FaTwitter/></a>
                        <a target="_blank" rel="noreferrer" href="https://google.com"><FaGoogle/></a>
                    </div>
                </div>
            ))}
            </Carousel>
        </div>
    );
}

export default Testemonials;