import "../styles/Frens.scss"
import { useNavigate } from 'react-router-dom'

const tg = window.Telegram.WebApp

const Frens = () => {
	tg.BackButton.show()
  const navigate = useNavigate();
	tg.onEvent('backButtonClicked', function() {
		navigate("/")
	});
	return (<div className="frens-page">
	<div className="wrapper">
		<div className="frens__title--section">
			Бонусы за друзей
		</div>
		<div className="frens__bonus--list">
			<div className="bonus-item">
				<img src="https://storage.easyx.ru/images/easydonate/products/gwjStqVoFbBVZwrC2BmA23z80FNbse8w.png" />
				<div className="item__info">
					<p className="info__name">Пригласи друга</p>
					<p className="info__description">
						<img src="https://storage.easyx.ru/images/easydonate/products/gwjStqVoFbBVZwrC2BmA23z80FNbse8w.png" /><span className="orange--color">2,500</span>тебе и другу
					</p>
				</div>
			</div>
			<div className="bonus-item">
				<img src="https://cdn.mypanel.link/99d3o9/sz26nnm5qm37ady7.png" />
				<div className="item__info">
					<p className="info__name">Друга с <span className="blue--color">Telegram Premium</span></p>
					<p className="info__description">
						<img src="https://storage.easyx.ru/images/easydonate/products/gwjStqVoFbBVZwrC2BmA23z80FNbse8w.png" /><span className="orange--color">50,000</span>тебе и другу
					</p>
				</div>
			</div>
		</div>
		<div className="frens__title--section">
			Бонусы за переход друга в новую лигу
		</div>
		<div className="frens__bonus--table">
			<div className="bonus__col left">
				<p className="col__name">Новая лига</p>
				<p className="col__info">Silver</p>
				<p className="col__info">Gold</p>
				<p className="col__info">Platinum</p>
				<p className="col__info">Diamonds</p>
			</div>
			<div className="bonus__col right">
				<p className="col__name">За друга</p>
				<p className="col__info"><span className="orange--color">+12,500</span></p>
				<p className="col__info"><span className="orange--color">+25,000</span></p>
				<p className="col__info"><span className="orange--color">+50,000</span></p>
				<p className="col__info"><span className="orange--color">+100,000</span></p>
			</div>
			<div className="bonus__col right">
				<p className="col__name">Premium</p>
				<p className="col__info"><span className="orange--color">+125,000</span></p>
				<p className="col__info"><span className="orange--color">+250,000</span></p>
				<p className="col__info"><span className="orange--color">+500,000</span></p>
				<p className="col__info"><span className="orange--color">+1,000,000</span></p>
			</div>
		</div>
	</div>
	<button className="frens__button">
		Пригласить
	</button>
</div>
	)
}

export default Frens
