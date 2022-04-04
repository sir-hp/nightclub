import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react';

const EventCard = ({ title, paragraf, date, location, image }) => {
    const [isHover, setIsHover] = useState(false);
    console.log(isHover);
    return (
        <AnimatePresence>
        <div className="card">
            <div className='eventCard' onMouseEnter={() => setIsHover(true)} onMouseLeave={ () => setIsHover(false)}>
                <img src={ image } alt={ title } />
                {isHover && (
                    <motion.div 
                        className='fadeBlack'
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button>Book Now</button>
                        <div>
                            <p className="title">{ title }</p>
                            <p className='content'>{ paragraf } </p>
                        </div>
                    </motion.div>
                    )}
                    <div className="pink">
                        <p className="date">{ date }</p>
                        <p className="time">{}</p>
                        <p className="place">{ location }</p>    
                    </div>
            </div>
        </div>
        </AnimatePresence>
        
                        
    );
}

export default EventCard;