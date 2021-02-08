import axios from "axios"
import download from "downloadjs"
import { LOADING, SAVE_PROJECT, UPDATE_PROJECT } from "./types"
// import { getTokenId } from "../components/common/UserId"

export const loadingAnimation = () => (dispatch) => {
	dispatch({ type: LOADING })
}

// export const saveProjectToStore = (projectData) => (dispatch) => {
// 	dispatch({ type: SAVE_PROJECT, payload: projectData })
// }

//Sends the financial information inputted from the onboarding section to the array of financial data that displays as options for users to select.
export const generateDocs = (data) => (dispatch) => {
	axios
		.post(
			// "https://5000-e5a921ea-4111-473a-ad9b-1474a7910719.ws-us03.gitpod.io/",
			"https://poppy-central.herokuapp.com/signatureCard",
			data,
			{ responseType: "blob" } // had to add this one here
		)
		.then((res) => {
			download(
				res.data,
				`${data.AccountInfo.BusinessName} - Sig Card`,
				res.content
			)

			console.log(res)
			return res
		})
		.catch((error) => console.log(error))
	axios
		.post(
			// "https://5000-e5a921ea-4111-473a-ad9b-1474a7910719.ws-us03.gitpod.io/resolution",
			"https://poppy-central.herokuapp.com/resolution",
			data,
			{ responseType: "blob" } // had to add this one here
		)
		.then((res) => {
			download(
				res.data,
				`${data.AccountInfo.BusinessName} - Resolution`,
				res.content
			)
			console.log(res)
			dispatch({ type: SAVE_PROJECT })
			return res
		})
		.catch((error) =>
			alert("Oops! Something funny happened. Try again or contact the admin.")
		)
}

export const saveProjectToStore = (projectData) => (dispatch) => {
	dispatch({ type: SAVE_PROJECT, payload: projectData })
}

export const updateProjectToStore = (projectData) => (dispatch) => {
	dispatch({ type: UPDATE_PROJECT, payload: projectData })
}

// //Sends the store information inputted from the onboarding section to the array of data that displays as options for users to select.
// export const addStore = (Store) => (dispatch) => {
// 	dispatch({ type: ADD_STORE_SUCCESS, payload: Store })
// }
// export const deleteStore = (deleteStore) => (dispatch) => {
// 	dispatch({ type: DELETE_STORE_SUCCESS, payload: deleteStore })
// }

// //Sends the personal site information inputted from the onboarding section to the array of personal sites data that displays as options for users to select.
// export const addPersonalSite = (personalSite) => (dispatch) => {
// 	dispatch({ type: ADD_PERSONAL_SITE_SUCCESS, payload: personalSite })
// }
// export const deleteSite = (deleteSite) => (dispatch) => {
// 	dispatch({ type: DELETE_SITE_SUCCESS, payload: deleteSite })
// }

// //LOGIN
// export const postLogin = (body) => (dispatch) => {
// 	axios
// 		//sends Post request to backend to login and authenticate user credentials
// 		.post("https://be-bookmark.herokuapp.com/login", body)
// 		.then((res) => {
// 			//if user credentials are verified, sets the jwt token to the local storage for authorization
// 			localStorage.setItem("token", res.data.token)
// 			dispatch({ type: LOGIN_SUCCESS, payload: res.data })
// 		})
// 		.catch((err) => dispatch({ type: LOGIN_FAIL, payload: err }))
// }

// //Sends Institution card options to database
// export const setFinancial = (body) => (dispatch) => {
// 	let id = getTokenId()
// 	const headers = { authorization: localStorage.getItem("token") }
// 	axios
// 		.post(`https://be-bookmark.herokuapp.com/addBanks/${id}`, body, { headers })
// 		.then((res) => {
// 			dispatch({ type: SET_FINANCIAL_SUCCESS, payload: res.data })
// 		})
// 		.catch((err) => dispatch({ type: SET_FINANCIAL_FAIL, payload: err }))
// }

// //Sends Shopping card options to database
// export const setStores = (body) => (dispatch) => {
// 	let id = getTokenId()
// 	const headers = { authorization: localStorage.getItem("token") }
// 	axios
// 		.post(`https://be-bookmark.herokuapp.com/addStoreData/${id}`, body, {
// 			headers,
// 		})
// 		.then((res) => {
// 			dispatch({ type: SET_STORES_SUCCESS, payload: res.data })
// 		})
// 		.catch((err) => dispatch({ type: SET_STORES_FAIL, payload: err }))
// }

// //Sends Personal card options to database
// export const setPersonal = (body) => (dispatch) => {
// 	let id = getTokenId()
// 	const headers = { authorization: localStorage.getItem("token") }
// 	axios
// 		.post(` https://be-bookmark.herokuapp.com/addPersonal/${id}`, body, {
// 			headers,
// 		})
// 		.then((res) => {
// 			dispatch({ type: SET_PERSONAL_SUCCESS, payload: res.data })
// 		})
// 		.catch((err) => dispatch({ type: SET_PERSONAL_FAIL, payload: err }))
// }

// //GETS user financial sites/names
// export const getmyFinancials = () => (dispatch) => {
// 	let id = getTokenId()

// 	const headers = { authorization: localStorage.getItem("token") }
// 	axios
// 		.get(`https://be-bookmark.herokuapp.com/getUserFinancial/${id}`, {
// 			headers,
// 		})
// 		.then((res) => {
// 			dispatch({ type: GET_FINANCIAL_SUCCESS, payload: res.data })
// 		})
// 		.catch((err) => dispatch({ type: GET_FINANCIAL_FAIL, payload: err }))
// }
