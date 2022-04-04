/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Heading from '../components/Heading';
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import Nav from '../components/Nav';
import 'react-toastify/dist/ReactToastify.css';
import table1 from '../assets/table/table_1.png'
import table2 from '../assets/table/table_2.png'
import table3 from '../assets/table/table_3.png'
import axios from 'axios';

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
    table: {
        required: 'Please choose your table'
    },
    guest: {
        required: 'Please enter the amount of guests'
    },
    date: {
        required: 'Please enter a date'
    },
    phone: {
        required: 'Please enter your contact number'
    },
}

const Book = () => {
    //Css
    const button = css`
        display: grid;
        background: none;
        border: none;
        cursor: pointer;
        img {
            grid-area: 1/1/-1/-1;
        }
        p {
            grid-area: 1/1/-1/-1;
            place-self: center;
        }
    `

    const body = css`
    width: 80%;
    margin: 2em auto;
    .Toastify__toast-theme--light  {
        background-color: #030203;
        border: solid 2px #fff;
    }
        .tabels {
            display: grid;
            grid-template-columns: repeat(5,1fr);
            gap: 30px;
        }
        h3 {
            margin: 2em 0 1em;
            font-size: 2em;
        }
        form {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .errMsg {
                    display: flex;
                    justify-content: space-between;
                    >div{
                        width: 50%;
                        >p{
                            text-align: center;
                        }
                    }
                }
                .doubleInput{
                    display: flex;
                    justify-content: space-between;
                    input{
                        width: 49%;
                        background-color: #030203;
                        border: 1px solid #fffa;
                        padding: 1em;
                        font-size: 1.1em;
                        margin-top: 1.5em;
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
                    margin-top: 2em;
                    text-transform: uppercase;
                    background: none;
                    border: none;
                    border-top: solid #FFF 2px;
                    border-bottom: solid #FFF 2px;
                    font-size: 1em;
                    padding: 1em 0;
                    box-shadow: none;
                    width: 10%;
                    align-self: end;
                }
            }
    `
    //JS
    const { register, handleSubmit, formState: {errors}, setValue  } = useForm()
    
    const onSubmit = (data) => {
        axios.post('http://localhost:4000/reservations', data)
        .then(result => console.log(result.data))
        toast.success('You have now booked a table', {
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
            <div className='underside'>
                <div className="undersideoverlay">
                <Heading whiteText={'contact us'} />
                </div>
            </div>
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
                <div className="tabels">
                    <button css={button} onClick={() => setValue("table", 1)} >
                        <img src={table1} alt="small table" />
                        <p>1</p>
                    </button>
                    <button css={button} onClick={() => setValue("table", 2)} >
                        <img src={table1} alt="small table" />
                        <p>2</p>
                    </button>
                    <button css={button}  onClick={() => setValue("table", 3)}>
                        <img src={table2} alt="medium table" />
                        <p>3</p>
                    </button>
                    <button css={button} onClick={() => setValue("table", 4)}>
                        <img src={table1} alt="small table" />
                        <p>4</p>
                    </button>
                    <button css={button} onClick={() => setValue("table", 5)}>
                        <img src={table3} alt="big table"/>
                        <p>5</p>
                    </button>
                    <button css={button} onClick={() => setValue("table", 6)}>
                        <img src={table1} alt="small table" />
                        <p>6</p>
                    </button>
                    <button css={button} onClick={() => setValue("table", 7)}>
                        <img src={table1} alt="small table" />
                        <p>7</p>
                    </button>
                    <button css={button}  onClick={() => setValue("table", 8)}>
                        <img src={table2} alt="medium table" />
                        <p>8</p>
                    </button>
                    <button css={button} onClick={() => setValue("table", 9)}>
                        <img src={table1} alt="small table" />
                        <p>9</p>
                    </button>
                    <button css={button} onClick={() => setValue("table", 10)}>
                        <img src={table3} alt="big table"/>
                        <p>10</p>
                    </button>
                    <button css={button} onClick={() => setValue("table", 11)}>
                        <img src={table1} alt="small table" />
                        <p>11</p>
                    </button>
                    <button css={button} onClick={() => setValue("table", 12)}>
                        <img src={table1} alt="small table" />
                        <p>12</p>
                    </button>
                    <button css={button}  onClick={() => setValue("table", 13)}>
                        <img src={table2} alt="medium table" />
                        <p>13</p>
                    </button>
                    <button css={button} onClick={() => setValue("table", 14)}>
                        <img src={table1} alt="small table" />
                        <p>14</p>
                    </button>
                    <button css={button} onClick={() => setValue("table", 15)}>
                        <img src={table3} alt="big table"/>
                        <p>15</p>
                    </button>
                </div>
                <h3>Book A Table</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='doubleInput'>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" id="name" placeholder='Your Name' {...register('name', validationSchma.name)} />
                        
                        <label htmlFor="name">Your Email</label>
                        <input type="text" name="email" id="email" placeholder='Your Email' {...register('email', validationSchma.email)} />
                    </div>
                    <div className="errMsg">
                        <div>
                            {errors.name && (
                                <p className='err'>{errors?.name?.message}</p>
                            )}
                        </div>
                        <div>
                            {errors.email && (
                                <p className='err'>{errors?.email?.message}</p>
                            )}
                        </div>
                    </div>
                    <div className='doubleInput'>
                        <label htmlFor="table">Table Number</label>
                        <input type="text" name="table" id="table" placeholder='Table Number' {...register('table', validationSchma.table)} />
                        
                        <label htmlFor="guest">Number Of Guests</label>
                        <input type="text" name="guest" id="guest" placeholder='Number Of Guests' {...register('guest', validationSchma.guest)} />
                    </div>
                    <div className="errMsg">
                        <div>
                            {errors.table && (
                                <p className='err'>{errors?.table?.message}</p>
                            )}
                        </div>
                        <div>
                            {errors.guest && (
                                <p className='err'>{errors?.guest?.message}</p>
                            )}
                        </div>
                    </div>
                    <div className='doubleInput'>
                        <label htmlFor="date">Select Date</label>
                        <input type="date" name="date" id="date" placeholder='Select Date' {...register('date', validationSchma.date)} />
                        
                        <label htmlFor="phone">Your Contact Number</label>
                        <input type="tel" name="phone" id="phone" placeholder='Your Contact Number' {...register('phone', validationSchma.phone)} />
                    </div>
                    <div className="errMsg">
                        <div>
                            {errors.date && (
                                <p className='err'>{errors?.date?.message}</p>
                            )}
                        </div>
                        <div>
                            {errors.phone && (
                                <p className='err'>{errors?.phone?.message}</p>
                            )}
                        </div>
                    </div>
                    <textarea name="info" id="info" />
                    <button type="submit">reserve</button>
                </form>

            </main>
        </>
    );
}

export default Book;