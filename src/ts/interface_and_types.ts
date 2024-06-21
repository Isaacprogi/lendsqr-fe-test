export interface statusBoardItemProps {
    logo: string;
    title: string;
    value: string;
}

export interface UserDetailsGetApiData {
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string

    profile: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        avatar: string;
        gender: string;
        bvn: string;
        address: string;
        currency: string
    };

    guarantor: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        gender: string;
        address: string
    };

    accountBalance: string;
    accountNumber: string;

    socials: {
        facebook: string;
        instagram: string;
        twitter: string
    };
    education: {
        level: string;
        employmentStatus: string;
        sector: string;
        duration: string;
        officeEmail: string;
        monthlyIncome: string[];
        loanRepayment: string
    }
    id: string
}


export interface userDataProps {
    user: {
        id: string,
        orgName: string,
        userName: string,
        email: string,
        phoneNumber: string,
        createdAt: string,
        status:string;
    }
    setDisplayStatusOptions:React.Dispatch<React.SetStateAction<string>>;
    displayStatusOptions:string;

}
export type userDataFetch = {
        accountBalance: string;
        accountNumber: string;
        createdAt: string;
        education: {
            level: string,
            employmentStatus: string,
            sector: string,
            duration: string,
            officeEmail: string,
            monthlyIncome:string[]
            loanRepayment:string,
        }
        email: string;
        guarantor: {
            firstName: string,
            lastName: string,
            phoneNumber: string,
            gender: string,
            address: string
        }
        id: string;
        lastActiveDate: string;
        orgName: string;
        phoneNumber: string;
        profile: {
            firstName: string;
            lastName: string, phoneNumber: string, avatar: string, gender: string
        }
        socials: { facebook: string, instagram: string, twitter: string }
        userName: string;
        status:string;
}

export type userDataFetchResults = {
    results:userDataFetch[]
}



export interface userDataInfoProps {
    dataTitle: string;
    dataValue: string;
    dataIdValue: string;
    dataIdTitle: string;
}

export interface sideBarButtonProps {
    setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
    showSideBar: boolean;
    dropDownActive: boolean;
}

export interface userPageProps {
    setDropDownActive: React.Dispatch<React.SetStateAction<boolean>>;
    dropDownActive: boolean;
    showSideBar:boolean;
    setShowSideBar:React.Dispatch<React.SetStateAction<boolean>>;
}

export interface userDetailsPageProps {
    setDropDownActive: React.Dispatch<React.SetStateAction<boolean>>;
    dropDownActive: boolean;
    showSideBar:boolean;
    setShowSideBar:React.Dispatch<React.SetStateAction<boolean>>;
}

export interface dashBoardPageProps {
    dropDownActive: boolean;
    showSideBar:boolean;
    setShowSideBar:React.Dispatch<React.SetStateAction<boolean>>;
}



export type AuthContextType = {
    auth: boolean;
    login: () => void;
    logout: () => void;
  };