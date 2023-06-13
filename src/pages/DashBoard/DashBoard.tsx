import '../../styles/css/DashBoard.css'
import { SideBarButton } from "../../components/SideBarButton/SideBarButton"
import { dashBoardPageProps } from "../../ts/interface_and_types"

export const DashBoard = ({dropDownActive,setShowSideBar,showSideBar}:dashBoardPageProps) => {




    return (
        <div className="dash-board">
                        <SideBarButton dropDownActive={dropDownActive} showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
                        <h1>DashBoard</h1>
       </div>
    )
}
