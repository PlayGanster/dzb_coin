import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import "../../styles/loader.scss"
import Error from '../../components/Error'
import { setInitData } from '../../redux/features/userSlice'
import { addError } from '../../redux/features/settingsSlice'

const tg = window.Telegram.WebApp

const Loader = (props: {children:JSX.Element[] | JSX.Element | string}) => {
	const user = useAppSelector(state=>state.user)
	const settings = useAppSelector(state=>state.settings)
	const [load, setLoad] = useState(false)
	const dispatch = useAppDispatch()

	useEffect(() => {
		tg.ready()
    tg.expand()
		if(tg.initDataUnsafe.user !== undefined && tg.initDataUnsafe.user !== null){
      dispatch(setInitData({data: tg.initDataUnsafe.user}))
		}else {
      // dispatch(setInitData({data: {first_name: "leader", last_name: ""}}))
			dispatch(addError({data: {error_code: 201, description: (<>Данное приложение подходит только для телеграмм.<br/> Приложение <a href="/">DZB COIN</a></>)}}))
		} 
	}, [])

	useEffect(() => {
		if(user.initData !== null) setTimeout(() => {setLoad(true)}, 2800)
	}, [user.initData])

	if(load !== true){
		if(settings.error.length !== 0) return <Error />
		return (<div className="loader-page"><span className="loader"></span></div>)
	}
	return props.children
}

export default Loader
