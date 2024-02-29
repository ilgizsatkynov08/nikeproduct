import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	apiKey: "AIzaSyD0CV0QndQj5YoZgMHXEPH4bLN0Pye25J8",
	authDomain: "nikeprojectregister.firebaseapp.com",
	projectId: "nikeprojectregister",
	storageBucket: "nikeprojectregister.appspot.com",
	messagingSenderId: "148399514158",
	appId: "1:148399514158:web:c0fe061368831254d335bf",
	measurementId: "G-BCFBDGG8XX"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
