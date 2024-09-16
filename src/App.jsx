import SearchGif from './component/SearchGif'
import RandomGif from './component/RandomGIf'


function App() {

  return (
    <div className='flex flex-col'>
        <div className='text-center bg-slate-300 py-4 mt-[3rem] ml-[5rem] mr-[5rem]'>
          <h1 className='text-xl font-bold'>Gif Generator</h1>
        </div>

        <div className='flex flex-col items-center m-auto w-1/2'>
          <RandomGif/>
          <SearchGif/>
        </div>
    </div>
  )
}

export default App
