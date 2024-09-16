import axios from "axios";
import { useEffect, useState } from "react";


function UseGifs(searchGif){

    const [gif, setGif] = useState('');
    const [spinner, setSpinner] = useState(false);

    const Api_Key = import.meta.env.VITE_API_KEY;
    const Randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${Api_Key}`
    const Searchurl = `https://api.giphy.com/v1/gifs/search?api_key=${Api_Key}&q=${searchGif}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    
    async function FetchRandomgif() {

        setSpinner(true);

        const {data} = await axios.get(searchGif ? Searchurl : Randomurl);
        const imageurl =  searchGif ? (data.data[0].images.original.url) : (data.data.images.downsized_large.url);
        setGif(imageurl);
        setSpinner(false);

    }

    useEffect(() => {
      FetchRandomgif();
    },[])

    return {gif, spinner, FetchRandomgif};
}

export default UseGifs;