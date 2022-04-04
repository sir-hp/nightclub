/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import icon from '../assets/icon/favicon.png'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const InfoCard = ({ img, title }) => {
    //Css
    const body = css`
        width: 32%;
        display: grid;
        img {
            grid-area: 1/1/-1/-1;
        }
        .content {
            border-top: solid 1px #ff2a70;
            border-bottom: solid 1px #ff2a70;
            background-color: #030203CD;
            grid-area: 1/1/-1/-1;
            .icon {
                width: 20%;
                margin: 4em auto 2em;
                border: solid 1px #ff2a70;
                border-radius: 5px;
                padding: 1em;
            }
            .width{
                width: 80%;
                margin:0 auto;
                text-align: center;
                .title {
                    font-weight: 600;
                    font-size: 1.1em;
                    margin-bottom: 1em;
                }
            }
        }
    `
    //JS
    const [isHover, setIsHover] = useState(false);
    console.log(isHover);
    return (
        <AnimatePresence>
            <div css={body} onMouseEnter={() => setIsHover(true)} onMouseLeave={ () => setIsHover(false)}>
                <img src={img} alt="info card" />
            {isHover &&(
                <motion.div 
                className='content'
                initial={{ opacity: 0, scale: 1.1}}
                animate={{ opacity: 1, scale: 1}}
                exit={{ opacity: 0 }}
                transition={{  duration: 1 }}
                
                >
                    <motion.div 
                    className='icon'
                    initial={{ opacity: 0, x: 50}}
                    animate={{ opacity: 1, x: 0}}
                    exit={{ opacity: 0 }}
                    transition={{  duration: 0.5, delay: 1 }}
                    >
                        <img src={icon} alt="icon" />
                    </motion.div>
                    <motion.div 
                    className='width'
                    initial={{ opacity: 0, x: 50}}
                    animate={{ opacity: 1, x: 0}}
                    exit={{ opacity: 0 }}
                    transition={{  duration: 0.5, delay: 1 }}
                    >
                        <p className='title'>{title}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, rerum officia magni, voluptate deserunt nobis accusantium reprehenderit modi vel nemo nostrum quisquam odit tenetur. Illo praesentium fugit quam sunt repudiandae!</p>
                    </motion.div>
                </motion.div>)}
            </div>
        </AnimatePresence>
    );
}

export default InfoCard;