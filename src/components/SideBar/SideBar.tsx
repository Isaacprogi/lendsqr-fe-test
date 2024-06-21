import '../../styles/css/SideBar.css'
import DashBoardTop from '../../assets/svg/sidebar/DashBoardTop.svg'
import DashBoardBottom from '../../assets/svg/sidebar/DashBoardBottom.svg'
import OrganizationTop from '../../assets/svg/sidebar/OrganizationTop.svg'
import OrganizationBottom from '../../assets/svg/sidebar/OrganizationBottom.svg'
import Users from '../../assets/svg/sidebar/Users.svg'
import Guarantors from '../../assets/svg/sidebar/Guarantors.svg'
import Decison from '../../assets/svg/sidebar/Decision.svg'
import Fees from '../../assets/svg/sidebar/fees.svg'
import Loans from '../../assets/svg/sidebar/Loans.svg'
import Savings from '../../assets/svg/sidebar/Savings.svg'
import Transactions from '../../assets/svg/sidebar/trans.svg'
import SavingsProd from '../../assets/svg/sidebar/SavingsNew.svg'
import LoanRequest from '../../assets/svg/sidebar/LoanRequests.svg'
import WhiteList from '../../assets/svg/sidebar/WhiteList.svg'
import Karma from '../../assets/svg/sidebar/Karma.svg'
import Organization from '../../assets/svg/sidebar/briefcase.svg'
import Services from '../../assets/svg/sidebar/Services.svg'
import ServiceAmount from '../../assets/svg/sidebar/ServiceAmount.svg'
import SettleMents from '../../assets/svg/sidebar/settlements.svg'
import Reports from '../../assets/svg/sidebar/chart-bar.svg'
import Preferences from '../../assets/svg/sidebar/Preferences.svg'
import Pricing from '../../assets/svg/sidebar/pricing.svg'
import AuditLogs from '../../assets/svg/sidebar/auditLogs.svg'
import SystemMessages from '../../assets/svg/sidebar/sysmessages.svg'
import Logout from '../../assets/svg/sidebar/sign-out.svg'
import { AiFillBell } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { HiDocument } from 'react-icons/hi'
import Me from '../../assets/images/Profile.png'
import { useNavigate } from 'react-router-dom'
import { BiChevronDown } from 'react-icons/bi'





export const SideBar = ({ setShowSideBar }: { setShowSideBar?: React.Dispatch<React.SetStateAction<boolean>> | undefined }) => {
    const hanldeSetShowSideBar = () => setShowSideBar && setShowSideBar(false)
    const navigate = useNavigate()
    return (
        <div className="sidebar">
            <section className='profile-more-options' data-testid='profile-more-options'>
                <div className='profile-info'>
                    <span className='avatar'>
                        <img data-testid='avatar' src={Me} alt="" />
                    </span>
                    <span data-testid="user-name-2">Adeji</span>
                </div>

                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <div className='top-bottom-icon-duo'>
                    <AiFillBell data-testid='notification-drawer-icon' />
                    </div>
                    <span> Notifications</span>
                </Link>
                
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <div className='top-bottom-icon-duo'>
                    <HiDocument data-testid='docs-drawer-icon' />
                    </div>
                    <span>Docs</span>
                </Link>
                    
            </section>
            <section className="top">
                <Link onClick={hanldeSetShowSideBar} to='/' className='org'>
                    <div className='top-bottom-icon-duo'>
                        <img src={OrganizationTop} alt="switch-organization-icon-1" />
                        <img src={OrganizationBottom} alt="switch-organization-icon-2" />
                    </div>
                    <span>Switch Organization</span>
                    <BiChevronDown/>
                </Link>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <div className='top-bottom-icon-duo'>
                        <img src={DashBoardTop} alt="dashboard-icons-1" />
                        <img className='dash-board-bottom' src={DashBoardBottom} alt="dashboard-icon-2" />
                    </div>
                    <span>Dash Board</span>
                </Link>
            </section>
            <section className="middle">

                {/* top section */}

                <h3>Customers</h3>
                <Link onClick={hanldeSetShowSideBar} to='/users'>
                    <img src={Users} alt="users-icon" />
                    <span>Users</span>
                </Link>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <img src={Guarantors} alt="guarantors-icon" />
                    <span>Guarantors</span>
                </Link>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <img src={Loans} alt="loans-icon" />
                    <span>Loans</span>
                </Link>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <img src={Decison} alt="decision-icon" />
                    <span>Decision Model</span>
                </Link>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <img src={Savings} alt="savings-icon" />
                    <span>Savings</span>
                </Link>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <img src={LoanRequest} alt="loan-request-icon" />
                    <span>Loan Requests</span>
                </Link>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <img src={WhiteList} alt="white-list-icon" />
                    <span>whiteList</span>
                </Link>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <img src={Karma} alt="karma-icon" />
                    <span>Karma</span>
                </Link>

                {/* middle section */}


                <h3>Businesses</h3>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <img src={Organization} alt="organization-icon" />
                    <span>Organization</span>
                </Link>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <img src={Guarantors} alt="loan-products-icon" />
                    <span>Loan Products</span>
                </Link>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <img src={SavingsProd} alt="savings-product-icon" />
                    <span>Savings Products</span>
                </Link>
                <Link to='/'>
                    <img src={Fees} alt="fees-and-charges-icon" />
                    <span>Fees and Charges</span>
                </Link>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <img src={Transactions} alt="transactions-icon" />
                    <span>Transactions</span>
                </Link>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <img src={Services} alt="services-icon" />
                    <span>Services</span>
                </Link>
                <Link to='/'>
                    <img src={ServiceAmount} alt="service-amount-icon" />
                    <span>Service Account</span>
                </Link>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <img src={SettleMents} alt="settlements-icon" />
                    <span>Settlements</span>
                </Link>
                <Link onClick={hanldeSetShowSideBar} to='/'>
                    <img src={Reports} alt="reports-icon" />
                    <span>Reports</span>
                </Link>

                {/* end section */}
                <span className='end-section'>
                    <h3>Businesses</h3>
                    <Link onClick={hanldeSetShowSideBar} to='/'>
                        <img src={Preferences} alt="preferences-icon" />
                        <span>Preferences</span>
                    </Link>
                    <Link onClick={hanldeSetShowSideBar} to='/'>
                        <img src={Pricing} alt="fees-and-pricing-icon" />
                        <span>Fees and Pricing</span>
                    </Link>
                    <Link onClick={hanldeSetShowSideBar} to='/'>
                        <img src={AuditLogs} alt="audit-logs-icon" />
                        <span>Audit Logs</span>
                    </Link>
                    <Link onClick={hanldeSetShowSideBar} to='/'>
                        <img src={SystemMessages} alt="systen-messages-icon" />
                        <span>System Messages</span>
                    </Link>
                </span>


                <div className="log-out-section">
                    <span onClick={()=>navigate('/login')} className='log-out'>
                        <img src={Logout} alt="log-out-icon" />
                        <span>Logout</span>
                    </span>

                    <span className='v1'>
                        v1.2.0
                    </span>
                </div>



            </section>
            <section className="bottom"></section>
        </div>
    )
}
