import Spinner from "./Spinner";
import UseGifs from "./UseGifs";




function RandomGif(){

    // const [gif, setGif] = useState('');
    // const [spinner, setSpinner] = useState(false);

    // const Api_Key = import.meta.env.VITE_API_KEY;
    
    // async function FetchRandomgif() {

    //     setSpinner(true);

    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${Api_Key}`
    //     const {data} = await axios.get(url);
    //     const imageurl = data.data.images.downsized_large.url;
    //     setGif(imageurl);
    //     setSpinner(false);

    // }

    // useEffect(() => {
    //   FetchRandomgif();
    // },[])


    const {spinner, gif, FetchRandomgif} = UseGifs();
    


    return(
        <div className="w-full border-2 border-black bg-green-400 flex flex-col items-center mt-4 rounded-md"> 
            <div className="flex flex-col w-full items-center gap-y-3">
                <h1 className="font-bold mt-2 underline text-lg uppercase">A Random Gif</h1>
                {
                    spinner ? (<Spinner/>) : (<img src={gif} className="m-2"/>)
                }
                
                <button onClick={() => FetchRandomgif()}
                className="bg-yellow-400 w-full max-w-[40rem] py-3 mb-3 text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-100 active:shadow-none">
                Generate
                </button>
            </div>
        </div>
    )
}

export default RandomGif;