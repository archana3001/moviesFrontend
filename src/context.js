import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext();

const API_URL = `https://api.themoviedb.org/3`
const API_PATH = `/search/movie?api_key=`
const API_QUERY = `&query=`
// const API_KEY = ``
const API_PATH1 = `/discover/movie?api_key=`


const AppProvider = ({ children }) => {


    const [movies, setMovies] = useState([])

    const [search, setSearch] = useState('Most Recent Movies')

    const update = (val) => {
        setSearch(val)
        if (val === "") {
            setSearch('Most Recent Movies')
            getMovies(API_URL + API_PATH1 + process.env.REACT_APP_SECRET)
        }
        else {// console.log(API_URL + API_PATH + process.env.REACT_APP_SECRET + API_QUERY + val)
            getMovies(API_URL + API_PATH + process.env.REACT_APP_SECRET + API_QUERY + val, val)
        }

    }


    const getMovies = async (url, val) => {
        try {
            const res = await fetch(url)
            const data = await res.json()


            if (data.total_pages === 0) {
                setSearch(val + " : No Results")
            } else {
                setMovies(data.results)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovies(API_URL + API_PATH1 + process.env.REACT_APP_SECRET)
    }, [])



    return <AppContext.Provider value={[movies, update, search]}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }