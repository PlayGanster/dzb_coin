import ReactDOM from 'react-dom/client'
import '../styles/global.scss'
import Layout from './layout/Layout'
import Router from './router/Router'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Loader from './loader/Loader'
const content = document.querySelector(".layout");
if (content) {
  content.addEventListener("contextmenu", (e) => e.preventDefault());
}
ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<Loader>
			<Layout>
				<Router />
			</Layout>
		</Loader>
	</Provider>
)
