import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import "../../styles/loader.scss"
import Error from '../../components/Error'
import { setCoin, setEnergy, setInitData } from '../../redux/features/userSlice'
import { addError } from '../../redux/features/settingsSlice'
import axios from 'axios'

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
			axios.get(`http://178.208.94.95/api/gamers/${tg.initDataUnsafe.user.id}`).then((response:any) => {
				if(!response.data.id && tg.initDataUnsafe.user){ 
						axios.post("http://178.208.94.95/api/gamers", {
						tg_id: tg.initDataUnsafe.user.id,
						amount: 0,
						energy: 1000,
						energy_hour: 1000
					})
					dispatch(setCoin({data: 0}))
					dispatch(setEnergy({data: 1000}))
				}else {
					dispatch(setCoin({data: response.data.amount}))
					dispatch(setEnergy({data: response.data.energy}))
				}
			}).catch((error:any) => {
				if(tg.initDataUnsafe.user)
				dispatch(addError({data: {error_code: 202, description: (<>Ошибка сервера{tg.initDataUnsafe.user.id}<br/>{error}</>)}}))
			})
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
