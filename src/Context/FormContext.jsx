import { createContext, useState } from "react";

const FormContext = createContext()

const FormProvider = ({ children }) => {
    const [formdata, setformdata] = useState({
        personalDetails: {
            firstName: "",
            lastName: "",
            email: "",
            phonenumber: "",
            website: "",
            github: "",
            linkedin: "",
            twitter: "",
        },
        educationalDetails: {
            collegeName: "",
            clgQualification: "",
            startYear: "",
            endYear: "",
            clgCgpa: "",
            schoolCgpa: "",
            schoolQualification: "",
            schoolPassYear: "",
            schoolName: "",
        },
        projects: {
            title1: "",
            link1: "",
            description1: "",
            title2: "",
            link2: "",
            description2: "",
            title3: "",
            link3: "",
            description: "",
        },
        experience: {
            organization1: "", position1: "", duration1: "", description1: "",
            organization2: "", position2: "", duration2: "", description2: "",
        },
        extraDetails: {
            skills1: "",
            skills2: "",
            skills3: "",
            skills4: "",
            skills5: "",
            interest1: "",
            interest2: "",
            interest3: "",
            interest4: "",
            interest5: "",

        },
    })

    return (
        <FormContext.Provider value={{ formdata, setformdata }}>
            {children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider }
