import React, { useRef } from 'react'
import { useGlobalContext } from './context';
// import { useGlobalContext } from './context'
import Movies from './Movies'
import './Styles/Home.css'

function Home() {
    // console.log(name)
    const inputEl = useRef();

    const [name, update, search] = useGlobalContext()

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.code === "Enter") {
            // console.log(inputEl.current.value)
            update(inputEl.current.value)
        }
        // console.log(e)
    };
    return (
        <div className='home-main'>
            <div className='home-navbar'>
                <img className='home-navbar-img' src='logo.png' />
                <div className='home-navbar-search'>
                    <img src='search.png' />
                    <input
                        ref={inputEl} type="text"
                        onKeyPress={handleKeypress}
                        className='home-navbar-search-input'
                        placeholder='Search for a movie' />
                </div>
            </div>
            {search}
            <Movies />
        </div>
    )
}

export default Home