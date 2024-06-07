import { BrowserRouter } from 'react-router-dom'
import "../../styles/layout.scss"

const Layout = (props: {children?: JSX.Element[] | JSX.Element | string}) => {
	return (
		<BrowserRouter>
			<section className="body--tg">
				<div className="tg--view">
					{
						props.children
					}
				</div>
			</section>
		</BrowserRouter>
	)
}

export default Layout
