export default class Difference {
	constructor(container, cards) {
		this.container = document.querySelector(container)
		this.cards = document.querySelectorAll(cards)
		this.showBtn = this.cards[this.cards.length - 1]
		this.currentOpenedCard = 0
	}

	showCard(card) {
		card.style.display = 'flex'
	}

	hideCard(card) {
		card.style.display = 'none'
	}

	trigger() {
		this.showBtn.onclick = () => {
			const currentCard = this.cards[this.currentOpenedCard]
			currentCard.classList.add('animated', 'fadeIn')
			this.showCard(currentCard)
			this.currentOpenedCard += 1

			if(this.currentOpenedCard === this.cards.length - 1) {
				this.showBtn.classList.add('animated', 'fadeOut')
				this.showBtn.style.display = 'none'
			}
		}
	}

	init() {
		try {
			this.cards.forEach((card, ind) => { 
				if(ind !== this.cards.length -1) this.hideCard(card) 
			})
			this.trigger()
		} catch(e) {}
	}
}