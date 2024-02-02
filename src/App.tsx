import './App.css'

import { Timer } from './components/molecules'

function App() {
  return (
    <div className="h-screen bg-background px-3 py-2 flex flex-col">
      <div className="flex flex-col items-center justify-center mt-2">
        <h1 className='text-title'>Hourglass</h1>
      </div>
      <div className="divider"></div >
      <Timer />
      
    </div>
  )
}

export default App