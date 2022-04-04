/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Heading from '../components/Heading';
import Nav from '../components/Nav';
import axios from 'axios';
import { IoMdPhonePortrait, IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchma = {
    name: {
        required: 'Please type your name'
    },
    email: {
        required: 'Please type your email',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please type a valid email"
        }
    },
    website: {
        required: 'Please type your website'
    },
    comment: {
        required: 'Please type your comment'
    }
}

const Contact = () => {
    //Css
    const body = css`
    .Toastify__toast-theme--light  {
        background-color: #030203;
        border: solid 2px #fff;
    }
        section {
            width: 80%;
            margin: 3em auto;
            display: flex;
            justify-content: space-between;
            
            form {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 49%;
                input{
                    background-color: #030203;
                    border: 1px solid #fffa;
                    padding: 1em;
                    font-size: 1.1em;
                    margin-top: 1.5em;
                    :first-of-type {
                        margin-top: 0;

                    }
                }
                textarea {
                    background-color: #030203;
                    border: 1px solid #fffa;
                    padding: 1em;
                    font-size: 1.1em;
                    margin-top: 1.5em;
                    height: 250px;
                }
                button {
                    margin-top: 3em;
                    text-transform: uppercase;
                    background: none;
                    border: none;
                    border-top: solid #FFF 2px;
                    border-bottom: solid #FFF 2px;
                    font-size: 0.8em;
                    padding: 1em 0;
                    box-shadow: none;
                    width: 20%;
                    align-self: end;
                }
            }
            .pinkBox {
                background: #ff2a70;
                padding: 1.5em;
                border-radius: 1px;
                display: flex;
                width: 49%;
                height: 190px;
                .info{
                    width: 40%;
                    :first-of-type {
                        margin-right:1em
                    }
                    .content {
                        display: flex;
                        margin-bottom: 1em;
                        :last-of-type {
                            margin-bottom: 0;
                        }
                        p {
                            margin-left: 0.75em;
                            text-transform: capitalize;
                        }
                    }
                }
            }
        }
    `
    const iconloco = css`
        font-size: 2.1em;
    `
    const icon = css`
        font-size: 1.1em;
        align-self: center;
    `
    //JS
    const { register, handleSubmit, formState: {errors} } = useForm()
    
    const onSubmit = (data) => {
        axios.post('http://localhost:4000/contact_messages', data)
        .then(result => console.log(result.data))
        toast.success('Thanks for your comment', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return (
        <>
        <Nav />
        <main css={body}>
        <ToastContainer
            className='toast'
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className='underside'>
                <div className="undersideoverlay">
                <Heading whiteText={'contact us'} />
                </div>
            </div>
            <section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="name" placeholder='Your Name' {...register('name', validationSchma.name)} />
                    {errors.name && (
                        <p className='err'>{errors?.name?.message}</p>
                    )}

                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" id="email" placeholder='Your Email' {...register('email', validationSchma.email)} />
                    {errors.email && (
                        <p className='err'>{errors?.email?.message}</p>
                    )}

                    <label htmlFor="website">Your Website</label>
                    <input type="text" name="website" id="website" placeholder='Your Website' {...register('website', validationSchma.website)}/>
                    {errors.website && (
                        <p className='err'>{errors?.website?.message}</p>
                    )}

                    <label htmlFor="comment">Your Comment</label>
                    <textarea name="comment" id="comment" placeholder='Your Comment' {...register('comment', validationSchma.comment)}/>
                    {errors.comment && (
                        <p className='err'>{errors?.comment?.message}</p>
                    )}

                    <button type="submit">submit</button>
                </form>
                <div className='pinkBox'>
                    <div className="info">
                        <div className="content">
                            <IoLocationSharp css={iconloco}/>
                            <div>
                            <p>04, agroha, agar mumbia national highway</p>
                            <p>no.3,</p>
                            <p>dewas # 455001 india</p>
                            </div>
                        </div>
                        <div className="content">
                            <IoMdPhonePortrait css={icon}/>
                            <p>+61 8 7804 6310</p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="content">
                            <IoIosMail css={icon}/>
                            <p> @hsoft.com</p>
                        </div>
                        <div className="content">
                            <FaGlobeAmericas css={icon}/>
                            <p>www.hsoft.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        </>
    );
}

export default Contact;