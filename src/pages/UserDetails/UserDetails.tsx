import { useState } from 'react'
import UserProfile from '../../assets/svg/user-activities/UserProfile.svg'
import ArrowBack from '../../assets/svg/user-activities/ArrowBack.svg'
import StarFilled from '../../assets/svg/user-activities/StarFilled.svg'
import StarOutline from '../../assets/svg/user-activities/StarOutline.svg'
import { UserDataInfo } from '../../components/UserDataInfo/UserDataInfo'
import { useParams } from "react-router-dom"
import '../../styles/css/UserDetails.css'
import { useNavigate } from 'react-router-dom'
import { UserDetailsGetApiData } from "../../utils/types/interface_and_types"
import { useEffect } from "react"
import axios from 'axios'

export const UserDetails = () => {
    const { id } = useParams()
    const [userDetails, setUserDetails] = useState<UserDetailsGetApiData>()
    const [headerActive, setHeaderActive] = useState<String>('')
    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()




    useEffect(() => {
        const getUserDetails = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
                setUserDetails(response?.data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
        getUserDetails()
    }, [id])


    const handleHeaderActive = (value: string) => {
        setHeaderActive(value)
    }




    return loading === false && userDetails ? (
        <div className='user-details-board'>

            <div className="header">
                <div className="right-side" >
                    <span ><img onClick={() => navigate(-1)} src={ArrowBack} alt="navigate-back-icon" />back to users</span>
                    <span data-testid="user-details">User Details</span>
                </div>

                <div className="left-side">
                    <span data-testid='black-list-user'>BLACKLIST USER</span>
                    <span data-testid='activate-user'>ACTIVATE USER</span>
                </div>
            </div>

            <div className="header-container">
                <section className="header-data">
                    <div data-testid="avatar" className="avatar">
                        {
                            userDetails?.profile.avatar ?
                                <img src={userDetails.profile.avatar} alt="avatar-logo" />
                                : <img src={UserProfile} alt="avatar-profile-pic" />
                        }
                    </div>
                    <div className="details-1">
                        {
                            userDetails && <>
                                <span className="user-details-name">{userDetails?.profile.firstName + " " + userDetails?.profile.lastName}</span>
                                <span className="user-details-number">LSGF587G90</span>
                            </>
                        }
                    </div>
                    <div className="details-2">
                        <span data-testid="user-tier">User's Tier</span>
                        <span>
                            <img src={StarFilled} alt="star-icon" />
                            <img src={StarOutline} alt="star-icon" />
                            <img src={StarOutline} alt="star-icon" />
                        </span>
                    </div>


                    <div className="details-3">
                        {userDetails && <>
                            <span data-testid="user-amount">{userDetails?.accountBalance}</span>
                            <span className="bank-details" data-testid="user-bank">{`${userDetails?.accountNumber}/Providus Bank`}</span>
                        </>}
                    </div>

                </section>
                <section className={`header-options `}>
                    <span data-testid="header-options-general" className={`${headerActive === 'General' ? 'active' : ""}`} onClick={() => handleHeaderActive('General')} >General Setting</span>
                    <span data-testid="header-options-documents" className={`${headerActive === 'Documents' ? 'active' : ""}`} onClick={() => handleHeaderActive('Documents')} >Documents</span>
                    <span data-testid="header-options-bank" className={`${headerActive === 'Bank' ? 'active' : ""}`} onClick={() => handleHeaderActive('Bank')} >Bank Details</span>
                    <span data-testid="header-options-loans" className={`${headerActive === 'Loans' ? 'active' : ""}`} onClick={() => handleHeaderActive('Loans')} >Loans</span>
                    <span data-testid="header-options-savings" className={`${headerActive === 'Savings' ? 'active' : ""}`} onClick={() => handleHeaderActive('Savings')} >Savings</span>
                    <span data-testid="header-options-app" className={`${headerActive === 'App' ? 'active' : ""}`} onClick={() => handleHeaderActive('App')} >App and System</span>
                </section>
            </div>

            <div className="user-body-data">
                <section className="sec">
                    <span data-testid='sec-header' className="sec-header">
                        Personal Info
                    </span>

                    <span>
                        {
                            userDetails && <div className="sec-data">
                                <UserDataInfo dataIdValue="personal-info-value" dataIdTitle="personal-info-title" dataTitle="FULL NAME" dataValue={userDetails?.profile.firstName + " " + userDetails?.profile.lastName} />
                                <UserDataInfo dataIdValue="personal-info-value" dataIdTitle="personal-info-title" dataTitle="PHONE NUMBER" dataValue={userDetails?.profile.phoneNumber} />
                                <UserDataInfo dataIdValue="personal-info-value" dataIdTitle="personal-info-title" dataTitle="EMAIL ADDRESS" dataValue={userDetails?.email} />
                                <UserDataInfo dataIdValue="personal-info-value" dataIdTitle="personal-info-title" dataTitle="BVN" dataValue={userDetails?.profile.bvn} />
                                <UserDataInfo dataIdValue="personal-info-value" dataIdTitle="personal-info-title" dataTitle="GENDER" dataValue={userDetails.profile.gender} />
                                <UserDataInfo dataIdValue="personal-info-value" dataIdTitle="personal-info-title" dataTitle="MARITAL STATUS" dataValue={userDetails.profile.gender} />
                                <UserDataInfo dataIdValue="personal-info-value" dataIdTitle="personal-info-title" dataTitle="CHILDREN" dataValue="none" />
                                <UserDataInfo dataIdValue="personal-info-value" dataIdTitle="personal-info-title" dataTitle="TYPE OF RESIDENCE" dataValue="parents appartment" />
                            </div>
                        }
                    </span>
                </section>

                <section className="sec">
                    <span data-testid='sec-header' className="sec-header">
                        Entertainment And Employment
                    </span>

                    <span>
                        {
                            userDetails && <div className="sec-data">
                                <UserDataInfo dataIdTitle="entertainment-title" dataIdValue='entertainment-value' dataTitle="LEVEL OF EDUCATION" dataValue={userDetails.education.level} />
                                <UserDataInfo dataIdTitle="entertainment-title" dataIdValue='entertainment-value' dataTitle="EMPLOYMENT STATUS" dataValue={userDetails.education.employmentStatus} />
                                <UserDataInfo dataIdTitle="entertainment-title" dataIdValue='entertainment-value' dataTitle="SECTOR OF EMPLOYMENT" dataValue={userDetails.education.sector} />
                                <UserDataInfo dataIdTitle="entertainment-title" dataIdValue='entertainment-value' dataTitle="DURATION OF EMPLOYMENT" dataValue={userDetails.education.duration} />
                                <UserDataInfo dataIdTitle="entertainment-title" dataIdValue='entertainment-value' dataTitle="OFFICE EMAIL" dataValue={userDetails.education.officeEmail} />
                                <UserDataInfo dataIdTitle="entertainment-title" dataIdValue='entertainment-value' dataTitle="MONTHLY INCOME" dataValue={userDetails.education.monthlyIncome[1] + "-" + userDetails.education.monthlyIncome[0]} />
                                <UserDataInfo dataIdTitle="entertainment-title" dataIdValue='entertainment-value' dataTitle="LOAN PAYMENT" dataValue={userDetails.education.loanRepayment} />
                            </div>
                        }
                    </span>
                </section>

                <section className="sec">
                    <span data-testid='sec-header' className="sec-header">
                        Socials
                    </span>
                    <span>

                        {
                            userDetails && <div className="sec-data">
                                <UserDataInfo dataIdValue="socials-value" dataIdTitle="socials-title" dataTitle="TWITTER" dataValue={userDetails?.socials.twitter} />
                                <UserDataInfo dataIdValue="socials-value" dataIdTitle="socials-title" dataTitle="FACEBOOK" dataValue={userDetails.socials.facebook} />
                                <UserDataInfo dataIdValue="socials-value" dataIdTitle="socials-title" dataTitle="INSTAGRAM" dataValue={userDetails?.socials.instagram} />

                            </div>
                        }
                    </span>
                </section>

                <section className="sec last">
                    <span data-testid='sec-header' className="sec-header">
                        Garantors
                    </span>

                    <span>
                        {
                            userDetails && <div className="sec-data">
                                <UserDataInfo dataIdValue="guarantors-value" dataIdTitle="guarantors-title" dataTitle="FULL NAME" dataValue={userDetails.guarantor.firstName + " " + userDetails.guarantor.lastName} />
                                <UserDataInfo dataIdValue="guarantors-value" dataIdTitle="guarantors-title" dataTitle="PHONE NUMBER" dataValue={userDetails.guarantor.phoneNumber} />
                                <UserDataInfo dataIdValue="guarantors-value" dataIdTitle="guarantors-title" dataTitle="EMAIL ADDRESS" dataValue="debby@gmail.com" />
                                <UserDataInfo dataIdValue="guarantors-value" dataIdTitle="guarantors-title" dataTitle="RELATIONSHIP" dataValue="sister" />


                            </div>
                        }
                    </span>

                </section>



            </div>

        </div>
    ) : <div className="skeleton">
        <div className="skeleton-line-1"></div>
        <div className="skeleton-line-2"></div>
        <div className="skeleton-line-3"></div>
    </div>
}
