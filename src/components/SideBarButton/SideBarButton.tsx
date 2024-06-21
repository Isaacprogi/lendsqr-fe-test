import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'
import { sideBarButtonProps } from '../../utils/types/interface_and_types'
import '../../styles/css/SideBarButton.css'

export const SideBarButton = ({showSideBar,dropDownActive,setShowSideBar}:sideBarButtonProps) => {
  return (
    <span data-testid='sidebar-button' onClick={() => setShowSideBar(!showSideBar)} className={`show-sidebar-button
    ${dropDownActive ? "" : "visible"}
    ${showSideBar? "enlarge": "reduce"}
     `}>
       {
           showSideBar ?
               <BsChevronLeft data-testid='chevron-left-icon' />
               :
               <BsChevronRight data-testid='chevron-right-icon' />
       }
   </span>
  )
}