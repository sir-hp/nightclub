/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import logo from '../assets/icon/Logo.svg'
import line from '../assets/bottom_line.png'
import { AnimatePresence, motion } from 'framer-motion'

const Logo = () => {
    const body = css`
        p{
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 22px;
            font-size: 21px;
            font-weight: 100;
            line-height: 1.1;
            margin-top: 10px;
            font-weight: 700;
        }
    `
    return (
        <div className='logoNslogan' css={body}>
            <AnimatePresence>
                <motion.img 
                src={logo} 
                alt="logo" 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 2.5}}
                />
                <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 3 }}
                >
                    <p>have a good time</p>
                    <img src={line} alt="line" className='pnkLine'/>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Logo;