import { useNavigate } from 'react-router-dom'
import DotsVertical from '../../assets/svg/user-activities/dots-vertical.svg'

import ActivateUser from '../../assets/svg/user-activities/ActivateUser.svg'
import BlacklistUser from '../../assets/svg/user-activities/BlacklistUser.svg'
import ViewDetails from '../../assets/svg/user-activities/ViewDetails.svg'
import { userDataProps } from '../../utils/types/interface_and_types'


export const UserData = ({ user,displayStatusOptions,setDisplayStatusOptions }: userDataProps) => {
  const navigate = useNavigate()

  const handleActivateUser = () => {
    user.status = 'Active'
    setDisplayStatusOptions('')
  }
  const handleBlackListUser = () => {
    user.status = 'Blacklisted'
    setDisplayStatusOptions('')
  }
  const handleViewDetails = () => {
    navigate(`/user-details/${user.id}`)
    setDisplayStatusOptions('')
  }
   const handleDisplay = (Data:{id:string}) => {
      if(displayStatusOptions){
        return setDisplayStatusOptions('')
      }
      setDisplayStatusOptions(Data.id)
   }

  return (
    <div data-testid='user-data-box' className="table-data">
      <span className='organization'>{user.orgName}</span>
      <span className='username'>{user.userName}</span>
      <span className='email'>{user.email}</span>
      <span className='phone-number'>{user.phoneNumber}</span>
      <span className='date-joined'>{new Date(user?.createdAt).toDateString()}</span>

      <span className='status-span'>
        <div data-testid="status-options-id" className={`status-options ${user?.id === displayStatusOptions ? "visible" : ""} `}>
          <span data-testid="view-list-span" onClick={handleViewDetails}>
            <img src={ViewDetails} alt="" />
            View Details
          </span>
          <span data-testid="black-list-span" onClick={handleBlackListUser}>
            <img src={BlacklistUser} alt="" />
            Blacklist User
          </span>
          <span data-testid="active-list-span" onClick={handleActivateUser}>
            <img src={ActivateUser} alt="" />
            Activate User
          </span>
        </div>
        <div className={`pending ${user?.status}`}>{user?.status}</div>
        <img onClick={()=>handleDisplay({id:user?.id})} src={DotsVertical} alt="three-dots" />
      </span>
    </div>
  )
}
