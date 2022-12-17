import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
import './Styles/SingleMovie.css'
function SingleMovie(data) {

    const [clicked, setClicked] = useState(false)
    // const { id } = useParams();
    const IMG_URL = 'https://image.tmdb.org/t/p/w400/'
    // console.log(data)
    const curr = data.curr
    return (<>
        <div className='normal-card' onClick={() => {
            setClicked(true)
        }}>

            {curr.poster_path ?
                // <img className='centre-card-img' src={IMG_URL + curr.poster_path} alt="oh!" />
                <div className='normal-card-img' style={{
                    backgroundImage: `url(${IMG_URL + curr.poster_path})`,
                    backgroundPosition: 'center'

                }} >
                    <div className='normal-card-rate'>{curr.vote_average}</div>
                </div>
                : <></>}
            <div className='normal-card-title'>{curr.original_title}</div></div>

        {clicked && <div className='centre-back'>
            <div className='centre-card'>

                {curr.poster_path ?
                    <img className='centre-card-img' src={IMG_URL + curr.poster_path} alt="oh!" />
                    : <></>}
                <button onClick={() => {
                    setClicked(false)
                }}><img src='close.png' /></button>
            </div>
        </div>}
    </>
    )
}

export default SingleMovie