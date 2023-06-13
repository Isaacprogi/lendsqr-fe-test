import { Outlet , Navigate} from "react-router-dom"
import { NavBar } from "../components/NavBar/NavBar"
import { SideBar } from "../components/SideBar/SideBar"


const PrivateRoutes = ({auth,showSideBar,setShowSideBar}:{auth:boolean,showSideBar:boolean,setShowSideBar:React.Dispatch<React.SetStateAction<boolean>>}) => {

   
   return (auth)?
      <>
      <div className={`${showSideBar === true? 'visible': ""} side-bar-slide`}>
            <SideBar setShowSideBar={setShowSideBar}/>
              </div> 
      <NavBar />
        <div className="body-section">   
            <div className='side-bar'>
              <SideBar />
            </div>       
           <Outlet/> 
        </div>
      </>: <Navigate to='/login' />
   
}

export default PrivateRoutes