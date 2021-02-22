import axios from "axios"
import download from "downloadjs"
import { LOADING, SAVE_PROJECT, UPDATE_PROJECT, UPDATE_LOADING } from "./types"

export const loadingAnimation = () => (dispatch) => {
    // toggles loading state store
    dispatch({ type: LOADING })
}

//Sends the financial information inputted from the onboarding section to the array of financial data that displays as options for users to select.
export const generateDocs = (data) => (dispatch) => {
    // commences post to generate signature card document
    axios
        .post(
            // "https://5000-e5a921ea-4111-473a-ad9b-1474a7910719.ws-us03.gitpod.io/",
            "https://poppy-central.herokuapp.com/signatureCard",
            data,
            { responseType: "blob" } // response blob tells the type of data it is (PDF)
        )
        .then((res) => {
            download(
                res.data,
                // This helps title the document that is downloaded
                `${data.AccountInfo.BusinessName} - Sig Card`,
                res.content
            )
            return res
        })
        .catch((error) => console.log(error))

    // commences call to server for the resolution document
    axios
        .post(
            // "https://5000-e5a921ea-4111-473a-ad9b-1474a7910719.ws-us03.gitpod.io/resolution",
            "https://poppy-central.herokuapp.com/resolution",
            data,
            { responseType: "blob" } // response blob tells the type of data it is (PDF)
        )
        .then((res) => {
            download(
                res.data,
                // This helps title the document that is downloaded
                `${data.AccountInfo.BusinessName} - Resolution`,
                res.content
            )
            dispatch({ type: UPDATE_LOADING })
            return res
        })
        .catch((error) => (
            alert("Oops! Something funny happened. Try again or contact the admin."), dispatch({ type: UPDATE_LOADING }))
        )
}

export const saveProjectToStore = (projectData) => (dispatch) => {
    // Creates a save to redux store for project
    dispatch({ type: SAVE_PROJECT, payload: projectData })
}

export const updateProjectToStore = (projectData) => (dispatch) => {
    // Sends updated data to reducer
    dispatch({ type: UPDATE_PROJECT, payload: projectData })
}