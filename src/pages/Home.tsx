import "../styles/home.scss"
import CoinImg from '../assets/coin.webp'
import { formatNumber } from '../other/formatNumber'
import { Coin } from '../components/home/Coin'
import { useAppSelector } from '../redux/store'
import { Link } from 'react-router-dom'

const tg = window.Telegram.WebApp

const Home = () => {
	tg.BackButton.hide()
	const user = useAppSelector(state=>state.user)
	return (
	<div className="home-page">
		<div className="home__header">
			<div className="header__profile">
				<img src="https://user-images.githubusercontent.com/103124683/186029291-4f6afe59-adbf-4123-b190-dfd91871535d.png" className="profile__icon"/>
				<div className="profile__info">
					<p className="info__name">{user.initData.first_name} {user.initData.last_name}</p>
					<p className="info__amount"><img src={CoinImg} />{formatNumber(user.coin)}</p>
				</div>
			</div>
			<div className="header__rank">
				<img src="https://freepngclipart.com/download/artistic/76954-trophy-free-clipart-hd.png" /> Diamond
			</div>
		</div>
		<div className="home__general">
			<div className="general__amount">
				<img src="https://storage.easyx.ru/images/easydonate/products/gwjStqVoFbBVZwrC2BmA23z80FNbse8w.png" />{formatNumber(user.coin)}
			</div>
			<div className="general__rank">
				<img src="https://freepngclipart.com/download/artistic/76954-trophy-free-clipart-hd.png" /> Diamond
			</div>
			<div className="general__coin--block">
				<Coin
        canIClickPlease={true}
        sleep={false}
        funMode={false}
        clickValue={1}
        cooldown={0}
        handleClick={() => {/*nothing*/}}  />
			</div>
		</div>
		<div className="home__footer">
			<div className="footer__progress">
				<p className="progress__info"><img src="https://emojikitchen.com/emoji/platform/joy-pixels/5-5/26a1.png" />{user.energy}</p><div className="progress--section"><div className="progress__bar" style={{
					width: `${100 / user.maxEnergy * user.energy }%`
				}}></div>
				</div>
			</div>
			<div className="footer__navigation">
				<Link to="/frens" className="navigation-item">
					<img src="https://emojikitchen.com/emoji/platform/hua-wei/1-0/1f381.png" />
					Frens
				</Link>
				<span className="navigation-tree"></span>
				<div className="navigation-item">
					<img src="https://emojikitchen.com/emoji/platform/hua-wei/1-0/1f381.png" />
					Frens
				</div>
				<span className="navigation-tree"></span>
				<div className="navigation-item">
					<img src="https://emojikitchen.com/emoji/platform/hua-wei/1-0/1f381.png" />
					Frens
				</div>
				<span className="navigation-tree"></span>
				<div className="navigation-item">
					<img src="https://emojikitchen.com/emoji/platform/hua-wei/1-0/1f381.png" />
					Frens
				</div>
			</div>
		</div>
	</div>
)
}

export default Home
