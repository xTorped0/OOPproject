export default class Accordion {
	constructor(triggers) {
		this.triggers = document.querySelectorAll(triggers)
	}

	hideInfo(trigger) {
		const elem = trigger.nextElementSibling

		elem.classList.remove('fadeInUp')
		elem.classList.add('fadeOut')
		elem.style.display = 'none'
	}

	showInfo(trigger) {
		const elem = trigger.nextElementSibling
		elem.classList.remove('fadeOut')
		elem.classList.add('animated', 'fadeInUp')
		elem.style.display = 'block'
	}

	toggleInfo(trigger) {
		const elem = trigger.nextElementSibling
		const isHidden = elem.style.display == 'none'

		if(isHidden) this.showInfo(trigger)
		else this.hideInfo(trigger)
	}

	bindTriggers() {
		this.triggers.forEach(trigger => {
			trigger.onclick = () => {
				this.toggleInfo(trigger)
			}
		})
	}

	init() {
		this.triggers.forEach(trigger=> {
			this.hideInfo(trigger)
		})

		this.bindTriggers()
	}
}