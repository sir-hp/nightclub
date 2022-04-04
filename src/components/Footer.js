/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import logo from '../assets/Logo.png'
import firstBlogPost from '../assets/content-img/recent_post1.jpg'
import secondBlogPost from '../assets/content-img/recent_post2.jpg'
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaSkype, FaBloggerB } from "react-icons/fa";

const Footer = () => {
    const body = css`
        .pink {
            color: #ff2a70;
            font-size: 1.3em;
            text-transform: uppercase;
            margin-bottom: 0.5em;
        }
        .footerBackground {
            display: grid;
            .overlay{
                padding: 4em 0;
                background-color: #030203CD;
                .sectionWrapper {
                    width: 80%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    >section {
                        width: 31%;
                    }
                    .firstSection{
                        .image{
                            width: 50%;
                            margin-bottom: 2em;
                        }
                        .uppercase{
                            text-transform: uppercase;
                            margin-bottom: 2em;
                        }
                    }
                    .secondSection {
                        .blogPost {
                            padding: 2em 0;
                            display: flex;
                            border-bottom: solid 2px #e0e0e033;
                            :first-of-type {
                                margin-top: 1em;
                            }
                            .blogImg {
                                width: 150px;
                                margin-right: 1em;
                            }
                            .blogDate{
                                color: #ff2a70;
                                text-transform: capitalize;
                                margin-top: 0.5em;
                            }
                        }
                    }
                    .thirdSection{
                        .twitterPost {
                            display: flex;
                            padding: 2em 0;
                            border-bottom: solid 2px #e0e0e033;
                            .icon{
                                margin-top: 0.3em;
                                margin-right: 1.5em;
                                path{ 
                                    color: #ff2a70;
                                }
                            }
                            .twitterTime {
                                color: #ff2a70;
                                margin-top: 0.5em;
                            }
                        }
                    }
                }
            }
        }
        .coppyrightNLinks{
            background-color: #000;
            padding: 2em 0;
            .bottomfot{
            width: 80%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            >div {
                width: 225px;
                display: flex;
                justify-content: space-between;
                >div{
                    border: solid 2px #fff;
                    padding: 0.5em;
                }
            }
            }
        }
    `
    
    return (
        <footer css={body}>
            <div className='footerBackground'>
                <div className='overlay'>
                    <div className="sectionWrapper">
                        <section className="firstSection">
                            <div className="image">
                                <img src={logo} alt="Night Club" />
                            </div>
                            <p className="pink">Location</p>
                            <p className='uppercase'>PO Box 16122 Collins Street West Victoria 8007 Australia</p>

                            <p className="pink">opening Hours</p>
                            <p className='uppercase'>Mon-Fri 9 am to 10pm</p>

                            <p className="pink">Location</p>
                            <p className='uppercase'>Mon-fri 2pm to 6pm</p>
                        </section>
                        <section className="secondSection">
                            <p className="pink">Recent Post</p>
                            <div className="blogPost">
                                <div className="blogImg">
                                    <img src={firstBlogPost} alt="DJ" />
                                </div>
                                <div className="blogContent">
                                    <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p className="blogDate">april 17, 2018</p>
                                </div>
                            </div>
                            <div className="blogPost">
                                <div className="blogImg">
                                    <img src={secondBlogPost} alt="Crowd" />
                                </div>
                                <div className="blogContent">
                                    <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p className="blogDate">april 17, 2018</p>
                                </div>
                            </div>
                        </section>
                        <section className="thirdSection">
                            <p className="pink">Recent Post</p>
                            <div className="twitterPost">
                                <div className="icon">
                                    <FaTwitter />
                                </div>
                                <div className="twitterContent">
                                    <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p className="twitterTime">5 hour Ago</p>
                                </div>
                            </div>
                            <div className="twitterPost">
                                <div className="icon">
                                    <FaTwitter />
                                </div>
                                <div className="twitterContent">
                                    <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p className="twitterTime">5 hour Ago</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="coppyrightNLinks">
                <div className='bottomfot'>
                    <p>Stay Connected With Us Night Club</p>
                    <div>
                        <div><FaFacebookF/></div>
                        <div><FaTwitter/></div>
                        <div><FaGooglePlusG/></div>
                        <div><FaSkype/></div>
                        <div><FaBloggerB/></div>
                    </div>
                    <p>CopyRight @ 2018 NightClub psd template all rights</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;