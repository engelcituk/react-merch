import {useState, useEffect } from 'react'
import axios from 'axios'

const useGoogleAddress = address => {
    const [ map, setMap ] = useState({})
    // const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}${city}${province}${country}&key=AIzaSyBDItVqQ-MV8P_JJluFkbVWlB0PeAAuuN0`
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDVGC_rAShBWQNL3rffRjj5MSWGxCmwzNo`

    useEffect(() => {
        async function handler() {
            const response = await axios(API);
            setMap(response.data.results[0].geometry.location);
        }
        handler();
    }, []);

    return map
}

export default useGoogleAddress