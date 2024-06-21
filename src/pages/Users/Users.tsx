import { useEffect, useRef, useState } from "react";
import UsersLogo from '../../assets/svg/user-activities/Users.svg';
import ActiveUsers from '../../assets/svg/user-activities/ActiveUsers.svg';
import UserWithLoans from '../../assets/svg/user-activities/UserWithLoans.svg';
import UserWithSavings from '../../assets/svg/user-activities/UserWithSavings.svg';
import SignalDrop from '../../assets/svg/user-activities/SignalDrop.svg';
import { BsChevronLeft } from "react-icons/bs"
import { BsChevronRight } from "react-icons/bs"
import chevronDown from '../../assets/svg/user-activities/chevronDown.svg';
import { UserData } from "../../components/UserData/UserData";
import '../../styles/css/Users.css';
import ReactPaginate from 'react-paginate';
import { StatusBoardItem } from "../../components/StatusBoardItem/StatusBoardItem";
import { userDataFetch } from "../../utils/types/interface_and_types";
import axios from 'axios';

export const Users = () => {
    const [users, setUsers] = useState<userDataFetch[]>([]);
    const n = 1;

    const [selectData, setSelectData] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [statusData, setStatusData] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [organizations, setOrganizations] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [displayStatusOptions, setDisplayStatusOptions] = useState<string>('');
    const [filter, setFilter] = useState<userDataFetch[]>([]);

    const [dropDownActive, setDropDownActive] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const randomStatus = () => {
        return ['Active', 'Inactive', 'Blacklisted', 'Pending']?.sort(() => Math.random() > 0.5 ? 1 : -1)?.slice(0, n);
    };

    const getUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get<userDataFetch[]>('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
            const newData = response.data.map((item: any) => {
                return { ...item, status: randomStatus().toString() };
            });
            setUsers(newData);
            setFilter(newData);
            setOrganizations([...new Set(response.data.map((item: any) => item?.orgName))]);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleFilter = () => {
        setFilter(users.filter((user: userDataFetch) => user?.userName === username
            || user.orgName === selectData
            || new Date(user.createdAt).toDateString() === new Date(date).toDateString()
            || user.status.toLowerCase() === statusData.toLowerCase()
            || user.phoneNumber === phoneNumber
            || user.email === email
        ));
    };

    const handleReset = () => {
        setSelectData("");
        setUsername("");
        setDate("");
        setEmail("");
        setStatusData("");
        setPhoneNumber("");
        getUsers();
    };

    const [currentItems, setCurrentItems] = useState<any[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(filter.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filter.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, filter]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % filter.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropDownActive(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return loading === false && users?.length > 0 ? (
        <div className="user-board">
            <h1>Users</h1>

            <section className="status-board">
                <StatusBoardItem logo={UsersLogo} title="Users" value={users.length.toString()} />
                <StatusBoardItem logo={ActiveUsers} title="Active Users" value={users.filter(user => user.status === 'Active').length.toString()} />
                <StatusBoardItem logo={UserWithLoans} title="User With Loans" value={users.filter(user => user.education?.loanRepayment !== '').length.toString()} />
                <StatusBoardItem logo={UserWithSavings} title="User With Savings" value={users.filter(user => user.accountBalance !== '').length.toString()} />
            </section>

            <section className="table-container">
                <div className="table">
                    <section className="table-titles">
                        <span className="organization">
                            <span data-testid="table-title-1">Organization</span>
                            <img src={SignalDrop} alt="organization-logo" />
                        </span>
                        <span className="username">
                            <span data-testid="table-title-2">Username</span>
                            <img src={SignalDrop} alt="username-logo" />
                        </span>
                        <span className="email">
                            <span data-testid="table-title-3">Email</span>
                            <img src={SignalDrop} alt="email-logo" />
                        </span>
                        <span className="phone-number">
                            <span data-testid="table-title-4">Phone Number</span>
                            <img src={SignalDrop} alt="phone-number-logo" />
                        </span>
                        <span className="date-joined">
                            <span data-testid="table-title-5">Date</span>
                            <img src={SignalDrop} alt="date-logo" />
                        </span>
                        <span className="status">
                            <span data-testid="table-title-6">Status</span>
                            <img src={SignalDrop} alt="status-logo" />
                        </span>
                    </section>
                    <section className="table-data-container">
                        {
                            !loading && currentItems.map(user => {
                                return <UserData displayStatusOptions={displayStatusOptions} setDisplayStatusOptions={setDisplayStatusOptions} key={user.id} user={user} />;
                            })
                        }
                    </section>
                </div>
            </section>

            <section className="pagination">
                <div data-testid="drop-down-block" ref={dropdownRef} className={`drop-down ${dropDownActive ? 'visible' : ''}`}>
                    <div className="select">
                        <span data-testid="select-organization">Organization</span>
                        <select name="select-input" value={selectData} onChange={(e) => setSelectData(e.target.value)}>
                            {
                                organizations?.map((org, index) => {
                                    return <option key={index}>
                                        {org}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="username">
                        <span data-testid="username">Username</span>
                        <input value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} placeholder="Username" type="text" />
                    </div>
                    <div className="email">
                        <span data-testid="email">Email</span>
                        <input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder="Email" type="email" />
                    </div>
                    <div className="date">
                        <span data-testid="date">Date</span>
                        <input value={date} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)} type="date" />
                    </div>
                    <div className="phone-number">
                        <span data-testid="phone-number">Phone Number</span>
                        <input value={phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)} placeholder="Phone Number" type="text" />
                    </div>
                    <div className="status">
                        <span data-testid="status">Status</span>
                        <input value={statusData} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStatusData(e.target.value)} placeholder="Status" type="text" />
                    </div>

                    <div className="controls">
                        <span onClick={handleReset} data-testid="reset">Reset</span>
                        <span onClick={handleFilter} data-testid="filter">Filter</span>
                    </div>
                </div>
                <div className="right">
                    <span>Showing</span>
                    <span data-testid="drop-down-button" onClick={() => setDropDownActive(!dropDownActive)}>
                        {filter?.length}
                        <img src={chevronDown} alt="chevron-down" />
                    </span>
                    <span>out of 100</span>
                </div>
                <div className="left">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={<BsChevronRight />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel={<BsChevronLeft />}
                        containerClassName="pagination-left"
                        pageLinkClassName="page-num"
                        previousClassName="page-nav-button-1"
                        nextLinkClassName="page-nav-button-2"
                        activeClassName="active"
                    />
                </div>
            </section>
        </div>
    ) : 
        <div className="skeleton">
            <div className="skeleton-line-1"></div>
            <div className="skeleton-line-2"></div>
            <div className="skeleton-line-3"></div>
        </div>
};
