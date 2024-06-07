import { useAppSelector } from '../redux/store'
import "../styles/error.scss"

const tg = window.Telegram.WebApp

const Error = () => {
	const settings = useAppSelector(state=>state.settings)
	function renderButton(){
		if(settings.error[0].error_code !== 201) return (<div className="page__button"><button onClick={() => tg.close()}>Закрыть</button></div>)
	}
	return (
		<div className="error-page">
			<div>
				<div className="page__header">
					Ошибка код {settings.error[0].error_code}
				</div>
				<div className="page__body">
					{settings.error[0].description}
				</div>
			</div>
			{
				renderButton()
			}
		</div>
	)
}

export default Error
