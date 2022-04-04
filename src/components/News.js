/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const validationSchma = {
    email: {
        required: 'Please type your email',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please type a valid email"
        }
    }
}

const News = () => {
    //Css
    const body = css`
        background-color: #000;
        text-align: center;
        padding: 4em 0;
        .Toastify__toast-theme--light  {
            background-color: #030203;
            border: solid 2px #fff;
        }
        h3{
            font-weight: 500;
            text-transform: uppercase;
            margin-bottom: 0.5em;
        }
        span{
            color: #ff2a70;
        }
        form {
            margin-top: 3em;
            input{
                background: none;
                border: none;
                border-bottom: solid #FFF 2px;
                color: #fff;
                font-size: 1.1em;
                padding: 1em 0.5em;
                margin-right: 1.5em;
                width:30% ;

            }
            button {
                text-transform: uppercase;
                background: none;
                border: none;
                border-top: solid #FFF 2px;
                border-bottom: solid #FFF 2px;
                font-size: 1.1em;
                padding: 1em 2em;
                box-shadow: none;
            }
        }
    `
    //JS
    const { register, handleSubmit, formState: {errors} } = useForm()
    
    const onSubmit = (data) => {
        axios.post('http://localhost:4000/newsletters', data)
        toast.success('Thanks for subscribing', {
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
        <section css={body}>
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
            <h3>want the latest night club news</h3>
            <p>Subscribe tp our newsletter and never miss an <span>Event</span></p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Enter Your Email</label>
                <input type="text" name="email" id="Email" placeholder="Enter Your Email" {...register('email', validationSchma.email)}/>
                <button type="submit">Subscribe</button>
            </form>
            <p className='err'>{errors?.email?.message}</p>
        </section>
    );
}

export default News;