/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import InfoCard from '../components/InfoCard';
import club from '../assets/content-img/thumb1.jpg'
import resturent from '../assets/content-img/reastaurant_1.jpg'
import bar from '../assets/content-img/thumb2.jpg'
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Testemonials from '../components/Testemonials';
import Blog from '../components/Blog';
import News from '../components/News';

const Home = () => {
    const body = css`
    .infoCardSection{
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: 0 auto;
    }
    .events{
        display: grid;

        >div{
            padding: 2em 0;
            background-color: #030203CD;
        }
    }
    .gallery{
        padding-bottom: 2em;
    }
    }
    .testemonials {
        z-index: -2;
        display: grid;
        >div{
            padding: 2em 0;
            background-color: #030203CD;
        }
    }
    .blog {
        padding-bottom: 4em;
    }
    `
    return (
        <>
            <Hero />
            <main css={body}>
                <Heading whiteText={"welcome in night"} pinkText={"club"}/>
                <section className='infoCardSection'>
                    <InfoCard img={club} title={'Night Club'} />
                    <InfoCard img={resturent} title={'Resturent'} />
                    <InfoCard img={bar} title={'Bar'} />
                </section>
                <section className="events">
                    <div>
                        <Heading whiteText={'events of the month'} />
                        <Events />
                    </div>
                </section>
                <section className='gallery'>
                    <Heading whiteText={'Night Club gallery'} />
                    <Gallery />
                </section>
                <section className='testemonials'>
                    <div>
                        <Testemonials/>
                    </div>
                </section>
                <section className="blog">
                    <Heading whiteText={'recent blog'}/>
                    <Blog />
                </section>
                <News />
            </main>
        </>
    );
}

export default Home;