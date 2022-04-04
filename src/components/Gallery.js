/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import Lightbox from './Lightbox';

const Gallery = () => {
    //Css
    const body = css`
        .firstLine {
            display: flex;
            align-items: end;
        }
        .secondLine {
            display: flex;
        }
        .galBox{
            display: grid;
            img {
                grid-area: 1/1/-1/-1;
            }
            .overlay {
                grid-area: 1/1/-1/-1;
                background-color: #030203CD;
                border-top: solid 1px #ff2a70;
                border-bottom: solid 1px #ff2a70;
            }
        }
    `
    //JS
    const [gallery, setGallery] = useState();
    useEffect(() => {
        axios('http://localhost:4000/gallery')
        .then(result => {
            setGallery(result.data);
        })
    }, []);

    const [isHover0, setIsHover0] = useState(false);
    const [isHover1, setIsHover1] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);
    const [isHover4, setIsHover4] = useState(false);
    const [isHover5, setIsHover5] = useState(false);
    const [isHover6, setIsHover6] = useState(false);

    const [isLightbox, setIsLightbox] = useState(false);
    return (
        <>
            <AnimatePresence>
                    <motion.div 
                    css={body} 
                    initial={{ opacity: 0, x: -850 }}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{ type: 'spring', delay: 0.25, duration: 1}}
                    >
                        <div className="firstLine">
                            <div className='galBox' onMouseEnter={() => setIsHover0(true)} onMouseLeave={ () => setIsHover0(false)}>
                                <img src={gallery?.[0].asset.url} alt={gallery?.[0].description} />
                                {isHover0 && (
                                    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overlay" onClick={() => setIsLightbox(true)}/>
                                    )}
                            </div>
                            <div className='galBox' onMouseEnter={() => setIsHover1(true)} onMouseLeave={ () => setIsHover1(false)}>
                                <img src={gallery?.[1].asset.url} alt={gallery?.[1].description} />
                                {isHover1 && (
                                    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overlay" onClick={() => setIsLightbox(true)}/>
                                    )}
                            </div>
                            <div className='galBox' onMouseEnter={() => setIsHover2(true)} onMouseLeave={ () => setIsHover2(false)}>
                                <img src={gallery?.[2].asset.url} alt={gallery?.[2].description} />
                                {isHover2 && (
                                    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overlay" onClick={() => setIsLightbox(true)}/>
                                    )}
                            </div>
                            <div className='galBox'  onMouseEnter={() => setIsHover3(true)} onMouseLeave={ () => setIsHover3(false)}>
                                <img src={gallery?.[3].asset.url} alt={gallery?.[3].description} />
                                {isHover3 && (
                                    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overlay" onClick={() => setIsLightbox(true)}/>
                                    )}
                            </div>
                        </div>
                        <div className="secondLine">
                            <div className='galBox' onMouseEnter={() => setIsHover4(true)} onMouseLeave={ () => setIsHover4(false)}>
                                <img src={gallery?.[4].asset.url} alt={gallery?.[4].description} />
                                {isHover4 && (
                                    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overlay" onClick={() => setIsLightbox(true)}/>
                                    )}
                            </div>
                            <div className='galBox' onMouseEnter={() => setIsHover5(true)} onMouseLeave={ () => setIsHover5(false)}>
                                <img src={gallery?.[5].asset.url} alt={gallery?.[5].description} />
                                {isHover5 && (
                                    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overlay" onClick={() => setIsLightbox(true)}/>
                                    )}
                            </div>
                            <div className='galBox' onMouseEnter={() => setIsHover6(true)} onMouseLeave={ () => setIsHover6(false)}>
                                <img src={gallery?.[6].asset.url} alt={gallery?.[6].description} />
                                {isHover6 && (
                                    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overlay" onClick={() => setIsLightbox(true)}/>
                                    )}
                            </div>
                        </div>
                    </motion.div>
            </AnimatePresence>
            {isLightbox && (
                <Lightbox setIsLightbox={setIsLightbox}/>
            )}
        </>
    );
}

export default Gallery;