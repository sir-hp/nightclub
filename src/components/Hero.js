/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Logo from './Logo'
import loading from '../assets/loader/madbars.gif'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './Nav'
import hero1 from '../assets/bg/header_bg_1.jpg'
import hero2 from '../assets/bg/header_bg_2.jpg'

const hero = [hero1, hero2];
let heroNumber = Math.floor(Math.random() * hero.length);

const Hero = () => {
    //Css
    const body = css`
        display: grid;
        .hero {
            grid-area: 1/1/-1/-1;
        }
        .load {
            grid-area: 1/1/-1/-1;
            place-self: center;
        }
        .textNLine {
            grid-area: 1/1/-1/-1;
            place-self: center;
            .logoNslogan {
                width: 59%;
                margin: 0 auto;
            }
        }
        .navi{
            grid-area: 1/1/-1/-1;
            place-self: end;
            width: 100%;
        }
       
    `
    //JS

    return (
        <AnimatePresence>
            <div css={body}>
                <motion.div 
                className='load'
                initial={{ scale: 1 }}
                animate={{ scale: 0 }}
                transition={{ delay: 2}}
                >
                    <img src={loading} alt="loading" />
                </motion.div>
                <motion.img src={hero[heroNumber]}
                alt="Hero"
                className='hero'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.5, duration: 0 }}
                />
                <div className='textNLine'>
                    <Logo />
                
                </div>
                <motion.div
                className='navi'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 3.2}}
                >
                    <Nav/>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export default Hero;