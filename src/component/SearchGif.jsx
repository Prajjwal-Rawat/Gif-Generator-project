// import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import UseGifs from "./UseGifs";




function SearchGif(){
    
    const [searchGif, setSearchGIf] = useState('dog');
    // const [gif, setGif] = useState('');
    // const [spinner, setSpinner] = useState(false);

    // const Api_Key = import.meta.env.VITE_API_KEY;
    
    // async function FetchRandomgif() {

    //     setSpinner(true);
    //     const url = `https://api.giphy.com/v1/gifs/search?api_key=${Api_Key}&q=${searchGif}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    //     const {data} = await axios.get(url);
    //     const imageurl = data.data[0].images.original.url;
    //     setGif(imageurl);
    //     setSpinner(false);

    // }

    // useEffect(() => {
    //   FetchRandomgif();
    // },[])
    
    const {gif, spinner, FetchRandomgif} = UseGifs(searchGif);

    return(
        <div className="w-full border-2 border-black bg-blue-400 flex flex-col items-center mt-4 rounded-md"> 
            <div className="flex flex-col w-full items-center gap-y-3">
                <h1 className="font-bold mt-2 underline text-lg uppercase">Random {searchGif} Gif</h1>
                {
                    spinner ? (<Spinner/>) : (<img src={gif} className="m-2"/>)
                }


                <input onChange={(event) => setSearchGIf(event.target.value)} 
                className="w-full max-w-[40rem] py-2 font-semibold rounded-md text-center capitalize" 
                type="text"
                value =  {searchGif} />
                
                <button onClick={() =>  FetchRandomgif(searchGif)}
                className="bg-yellow-400 w-full max-w-[40rem] py-3 mb-3 text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-100 active:shadow-none">
                Generate
                </button>
            </div>
        </div>
    )
}

export default SearchGif;