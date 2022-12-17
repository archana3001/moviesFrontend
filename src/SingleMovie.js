import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
import './Styles/SingleMovie.css'
function SingleMovie(data) {

    const [clicked, setClicked] = useState(false)
    // const { id } = useParams();
    const IMG_URL = 'https://image.tmdb.org/t/p/w400/'
    // console.log(data)
    const curr = data.curr

    function getDate(str) {

        // empty string

        let year = str.slice(0, 4)
        let month = str.slice(5, 7)
        let int1 = parseInt(month)
        const months = [
            "January", "February",
            "March", "April", "May",
            "June", "July", "August",
            "September", "October",
            "November", "December"
        ];
        let mon1 = months[int1 - 1]
        let day = str.slice(8)
        // console.log(mon1 +" "+ day+", "+year)
        let newString = mon1 + " " + day + ", " + year;
        return newString;
    }


    // const date1 = new Date(reverseString(curr.release_date));
    console.log(getDate(curr.release_date))


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
                <div>
                    <h3>
                        {curr.original_title}
                    </h3>
                </div>
                <div className='centre-card-content'>

                    {curr.poster_path ?
                        <img className='centre-card-img' src={IMG_URL + curr.poster_path} alt="oh!" />
                        : <></>}

                    <div>
                        <div className='centre-card-text'>
                            <b>Release date: </b>{getDate(curr.release_date)}
                        </div>

                        <div className='centre-card-text'>
                            {curr.overview}
                        </div>

                        <div className='centre-card-text'>
                            <b>{curr.vote_average}</b> /10 ({curr.vote_count} total votes)
                        </div>
                    </div>

                </div>

                <button onClick={() => {
                    setClicked(false)
                }}><img src='close.png' /></button>
            </div>
        </div>}
    </>
    )
}

export default SingleMovie