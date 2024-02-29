import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from '../components/context/AuthContext'

export const ProtectedRoutes = () => {
	const { user } = useAuthContext()

	function isAllowed() {
		if (user.email === "ramazan@gmail.com") {
			return true
		} else {
			return false
		}
	}
	isAllowed() ? (<Outlet/>) : (<Navigate to="sign_in"/>)
}
