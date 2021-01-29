
import {
    ADD_BANKS_SUCCESS,
    ADD_STORE_SUCCESS,
    ADD_PERSONAL_SITE_SUCCESS,
} from "../actions/types";

const initialstate = {
    teamMembers: [
        { label: "Sarah Conners", value: "Sarah Conners" },
        { label: "Mike Smith", value: "Mike Smith" },
        { label: "Wally Borg", value: "Whale" },
        { label: "Cindy Lok", value: "Cindy Lok" },
        { label: "Kirk Wood", value: "Kirk Wood" },
        { label: "Laguna Wayward", value: "Laguna Wayward" },
    ],
    savedProjects: {
        OMG: {
            businessInfo: {
                Type: "Business",
                Ownership: "LLC",
                Benificiary: "",
                BeneficiaryDetails: "",
                totalSigners: 4,
                BusinessName: "Oakmont Management Group LLC",
                Prefix: "",
                PrefixName: "",
                PrefixEIN: "",
                AnotherName: "",
                Street: "9240 Old Redwood Hwy Ste 200",
                City: "Windsor, CA 95492",
                EIN: "46-1228206",
                AccountType1: "OMG PAYROLL",
                AccountNumber1: "01-1002451-9",
            },
            signer1: {
                Name: "Kevin Tyler",
                Relationship: "Auth Signer/Control Party",
                Street: "572 Lucero Ave",
                Position: "CFO & CIO",
                City: "Pacific Palisades, CA 90272",
                MailingStreet: "1920 Main St Ste 1200",
                MailingCity: "Irvine, CA 92614",
                PrimaryIDType: "Drivers License",
                Number: "F3582765 CA",
                IssueDate1: "01/26/2017",
                ExpirationDate1: "01/19/2022",
                OtherID: "Passport",
                OtherDesc: "Passport",
                Expires: "09/26/2021",
                Employer: "Oakmont Management Group",
                Title: "CFO",
                email: "ktyler@oakmontmg.com",
                WorkPhone: "",
                HomePhone: "",
                Cell: "(516) 353-7650",
                DOB: "01/19/1981",
                SSN: "071-66-8503",
            },
            signer2: {
                Name: "Courtney Siegel",
                Relationship: "Authorized Signer",
                Street: "649 Regency Cir",
                Position: "President & CEO",
                City: "Sacramento, CA 95864",
                MailingStreet: "1920 Main St Ste 1200",
                MailingCity: "Irvine, CA 92614",
                PrimaryIDType: "Drivers License",
                Number: "B8862965 CA",
                IssueDate1: "09/29/2017",
                ExpirationDate1: "03/18/2022",
                OtherID: "Credit Card",
                OtherDesc: "Visa",
                Expires: "02/28/2023",
                Employer: "Oakmont Management Group",
                Title: "Presiden & CEO",
                email: "courtney.siegel@oakmontmg.com",
                WorkPhone: "(509) 979-7256",
                HomePhone: "",
                Cell: "",
                DOB: "03/18/1983",
                SSN: "564-85-8403",
            },
            signer3: {
                Name: "Matthew Stevenson",
                Relationship: "Authorized Signer",
                Street: "12436 Altura Dr",
                Position: "COO",
                City: "Rancho Cucamonga, CA 91739",
                MailingStreet: "1920 Main St Ste 1200",
                MailingCity: "Irvine, CA 92614",
                PrimaryIDType: "Drivers License",
                Number: "B7218423 CA",
                IssueDate1: "03/02/2020",
                ExpirationDate1: "01/20/2025",
                OtherID: "Passport",
                OtherDesc: "Passport",
                Expires: "09/26/2021",
                Employer: "Poppy Bank",
                Title: "COO",
                email: "matt.stevenson@oakmontmg.com",
                WorkPhone: "",
                HomePhone: "",
                Cell: "(909) 210-1043",
                DOB: "01/20/1981",
                SSN: "613-32-6511",
            },
            signer4: {
                Name: "James Nicholas Meek",
                Relationship: "Authorized Signer",
                Street: "11 Spring Harbor",
                Position: "COO",
                City: "Aliso Viejo, CA 92656",
                MailingStreet: "",
                MailingCity: "",
                PrimaryIDType: "Drivers License",
                Number: "D8745399 CA",
                IssueDate1: "04/27/2020",
                ExpirationDate1: "06/17/2025",
                OtherID: "Credit Card",
                OtherDesc: "Visa",
                Expires: "05/30/2025",
                Employer: "Oakmont Management Group",
                Title: "Controller",
                email: "jmeek@oakmontmg.com",
                WorkPhone: "",
                HomePhone: "",
                Cell: "(949) 302-2586",
                DOB: "06/17/1982",
                SSN: "645-28-6234",
            },
        },
    },
    Completed: []
};

export const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_BANKS_SUCCESS:
            // Adds inputed financial name and wesite to the array of banks so it may be viewed by the user as a selection to add.
            state.myBanks.push(action.payload);
            return {
                ...state
            };
        case ADD_STORE_SUCCESS:
            state.shopping.push(action.payload);
            // Adds inputed store name and wesite to the array of stores so it may be viewed by the user as a selection to add.
            return {
                ...state
            };
        case ADD_PERSONAL_SITE_SUCCESS:
            // Adds inputed personal name of the site and wesite to the array of stores so it may be viewed by the user as a selection to add.
            state.personal.push(action.payload);
            return {
                ...state
            };
        default:
            return state;
    };
};