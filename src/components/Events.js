/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel'
import EventCard from './EventCard';

const Events = () => {
    const body = css`
    width: 80%;
    margin: 0 auto;
    .rec-pagination {
        button{
            border-radius: 0;
            background-color: ;
            box-shadow: none;
            border: solid 1px #fff;
            background: #fff;
        }
        
        .rec-dot_active {
            background-color: #ff2a70;
            border: solid 1px #ff2a70;
        }
    }
        .pink{
            background-color: #ff2a70;
            display: flex;
            padding: 0.4em 0;
            p{
                margin: 0 1em;
            }
        }
        .card {
            .eventCard {
                display: grid;
                img {
                    grid-area: 1/1/-1/-1;
                }
                .fadeBlack{
                    grid-area: 1/1/-1/-1;
                    background-color: #030203aa;
                    display: grid;
                    button {
                        grid-area: 1/1/-1/-1;
                        place-self: center;
                        background-color: #ff2a70;
                        border: none;
                        padding: 1em 2em;
                        margin-bottom: 8em;
                    }
                    >div {
                        grid-area: 1/1/-1/-1;
                        align-self: end;
                        padding: 1em;
                        background-color: #030203DD;
                        .title {
                            font-weight: 500;
                            font-size: 1.1em;
                            margin-bottom: 0.5em
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
                }
            }
        }
    `
    
    const [events, setEvents] = useState();
    useEffect(() => {
        axios('http://localhost:4000/events')
        .then(result => {
            setEvents(result.data)
            console.log(result.data);
        })
    }, []);
    return (
        <div css={body}>
                <Carousel itemsToShow={2} showArrows={false} itemsToScroll={2} itemPadding={[15]}>
                    {events?.map(item => (
                        <EventCard key={item.id} title={ item.title } image={ item.asset.url } paragraf={ item.description } date={ item.date } location={ item.location }/>
                    ))}
                </Carousel>
        </div>
    );
}

export default Events;