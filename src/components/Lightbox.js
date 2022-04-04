/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Carousel from 'react-elastic-carousel'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Lightbox = ({ setIsLightbox }) => {
    //Css
    const body = css`
            position: fixed;
            top: 0;
            display: grid;
            width: 100%;
            height: 100%;
            z-index: 1;
        .black{
            grid-area: 1/1/-1/-1;
            background-color: #030203CD;
        }
        .wrapper {
            grid-area: 1/1/-1/-1;
            z-index: 100000;
            width: 80%;
            margin: 4em auto 0;
            .card {
                width: 60%;
                margin: 0 auto;
                >div {
                    padding: 2em;
                    background-color: #030203;
                    .title {
                        font-weight: 500;
                        font-size: 1.1em;
                        margin-bottom: 1em;
                    }
                    >div {
                        margin-top: 1em;
                        display: flex;
                        justify-content: end;
                        button {
                            text-transform: uppercase;
                            background: none;
                            border: none;
                            border-top: solid #FFF 1px;
                            border-bottom: solid #FFF 1px;
                            padding: 1em 2em;
                            box-shadow: none;
                        }
                    }
                }
            }
        }
       
        
        
    `
    //JS
    const [lightbox, setLightbox] = useState();
    useEffect(() => {
        axios('http://localhost:4000/gallery')
        .then(result => {
            setLightbox(result.data);
            console.log(result.data);
        })
    }, []);

    return (
        <div css={body} >
            <div className='black' onClick={() => setIsLightbox(false)}/>
            <div className="wrapper">
            
                <Carousel itemsToShow={1} itemsToScroll={1} >
                        {lightbox?.map(item => (
                            <div key={item.id} className="card">
                                <img src={item.asset.url} alt="" />
                                <div>
                                    <p className="title">{item.description}</p>
                                    <p className="lorem">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid culpa veniam recusandae, voluptates in voluptatem. Ex officia sunt a atque vel impedit, delectus esse, sit animi voluptas, quibusdam error at?
                                    </p>
                                    <div>
                                        <button>Read more</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Lightbox;