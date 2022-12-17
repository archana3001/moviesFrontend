import React from 'react'
import { useGlobalContext } from './context'
import SingleMovie from './SingleMovie'

import './Styles/Movies.css'

function Movies() {
    const [name, update, search] = useGlobalContext()
    // console.log(name)
    return (
        <>
            <h1>{search}</h1>
            <div className='movies-main'>{
                name.map((curr) => {
                    return (<SingleMovie curr={curr} key={curr.id} />)
                })
            }</div>
        </>
    )
}

export default Movies