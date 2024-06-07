import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Frens from '../../pages/Frens'

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/frens" element={<Frens />}/>
		</Routes>
	)
}

export default Router
