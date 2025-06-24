import {ScrollTrigger,SplitText} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger,SplitText);
import gsap from 'gsap'


const App=()=>{
  return(
     <div className="flex-center h-[100vh]">
      <h1 className="text-4xl">Helo</h1>
     </div>
  )
}

export default App;