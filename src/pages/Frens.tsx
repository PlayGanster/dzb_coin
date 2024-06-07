import { formatNumber } from '../other/formatNumber'
import CoinImg from "../assets/coin.webp"
import TelegramPremium from "../assets/telegram_premium.webp"
import "../styles/Frens.scss"
import { useNavigate } from 'react-router-dom'

const tg = window.Telegram.WebApp

const Frens = () => {
	tg.BackButton.show()
  const navigate = useNavigate();
	tg.onEvent('backButtonClicked', function() {
		navigate("/")
	});
	return (
		<div className="frens-page">
			<div className="wrapper">
				<div className="frens__title--section">
					Бонусы за друзей
				</div>
				<div className="frens__list">
					<div className="list-item">
						<div className="item__icon">
							<img src={CoinImg} />
						</div>
						<div className="item__info">
							<p className="info__name">Пригласи друга</p>
							<p className="info__description">
							<img src={CoinImg} /> <span className="orange--color">{formatNumber(2500)}</span> тебе и другу</p>
						</div>
					</div>
					<div className="list-item">
						<div className="item__icon">
							<img src={TelegramPremium} />
						</div>
						<div className="item__info">
							<p className="info__name">Друг с <span className="blue--color">Telegram Premium</span></p>
							<p className="info__description">
							<img src={CoinImg} /> <span className="orange--color">{formatNumber(50000)}</span> тебе и другу</p>
						</div>
					</div>
				</div>
				<div className="frens__title--section">
					Бонусы за переход друга в новую лигу
				</div>
				<div className="frens__paytable">
					<div className="paytable-col start">
						<p className="col__name">Новая лига</p>
						<p className="col__info">Silver</p>
						<p className="col__info">Gold</p>
						<p className="col__info">Platinum</p>
						<p className="col__info">Diamonds</p>
					</div>
					<div className="paytable-col end">
						<p className="col__name">За друга</p>
						<p className="col__info orange--color">+{formatNumber(12500)}</p>
						<p className="col__info orange--color">+{formatNumber(25000)}</p>
						<p className="col__info orange--color">+{formatNumber(50000)}</p>
						<p className="col__info orange--color">+{formatNumber(100000)}</p>
					</div>
					<div className="paytable-col end">
						<p className="col__name">Premium</p>
						<p className="col__info orange--color">+{formatNumber(125000)}</p>
						<p className="col__info orange--color">+{formatNumber(250000)}</p>
						<p className="col__info orange--color">+{formatNumber(500000)}</p>
						<p className="col__info orange--color">+{formatNumber(1000000)}</p>
					</div>
				</div>
			</div>
			<div className="fly--button">
				<button className="frens__fly--button">Пригласить</button>
			</div>
			<div className="frens--shadow--bottom"></div>
		</div>
	)
}

export default Frens
