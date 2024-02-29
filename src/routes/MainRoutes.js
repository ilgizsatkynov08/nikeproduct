import React from "react"
import Admin from "../components/admin/Admin"
import { Route, Routes } from "react-router-dom"
import ProductsPage from "../pages/ProductsPage"
import EditProduct from "../components/EdirProduct/EditProduct"
import SignIn from "../components/authentication/SignIn"
import SignUp from "../components/authentication/SingUp"
import Basket from "../components/Basket/Basket"
import { ProtectedRoutes } from "../helpers/function"

const MainRoutes = () => {
	const PRIVAT = [
		{ link: "/admin", element: <Admin />, id: 1 },
		{ link: "/edit/:id", element: <EditProduct />, id: 2 },
	]
	const PUBLIC = [
		{ link: "/", element: <ProductsPage />, id: 3 },
		{ link: "/sign_in", element: <SignIn />, id: 4 },
		{ link: "/sign_up", element: <SignUp />, id: 5 },
		{ link: "/basket", element: <Basket />, id: 6 },
	]
	return (
		<Routes>
			<Route title={<ProtectedRoutes />}>
				{PRIVAT.map((el) => (
					<Route path={el.link} element={el.element} key={el.id} />
				))}
			</Route>
			{PUBLIC.map((el) => (
				<Route path={el.link} element={el.element} key={el.id} />
			))}
		</Routes>
	)
}

export default MainRoutes
