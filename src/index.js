import React from "react"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import MainRoutes from "./routes/MainRoutes"
import ProductContext from './components/context/ProductContext'
import AuthContext from './components/context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<ProductContext>
		<AuthContext>
			<BrowserRouter>
				<App />
				<MainRoutes />
			</BrowserRouter>
		</AuthContext>
	</ProductContext>
)
