/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import littleLine from '../assets/bottom_line2.png'

const Heading = ({ whiteText, pinkText }) => {
    const underLine = css`
        width: 20%;
        margin: 0 auto;
        padding-bottom: 2em;
    `
    return (
        <>
            <h2 className='heading' >{whiteText}<span>{pinkText}</span></h2>
            <div css={underLine}>
                <img src={littleLine} alt="line" />
            </div>
        </>
    );
}

export default Heading;