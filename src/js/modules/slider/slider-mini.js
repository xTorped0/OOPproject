import Slider from "./slider";

export default class MiniSlider extends Slider {
	constructor(container, next, prev, activeClass, animate, autoplay) {
		super(container, next, prev, activeClass, animate, autoplay)
	}

	decorizeSlides() {
		this.slides.forEach(slide => {
			slide.classList.remove(this.activeClass)
			if(this.animate) {
				slide.querySelector('.card__title').style.opacity = '.4'
				slide.querySelector('.card__controls-arrow').style.opacity = '0'
			}
		})

		this.slides[0].classList.add(this.activeClass)
		if(this.animate) {
			this.slides[0].querySelector('.card__title').style.opacity = '1'
			this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1'
		}
	}

	bindTriggers() {
		this.next.onclick = () => { this.nextSlide() }

		this.prev.onclick = () => {
			let active = this.slides[this.slides.length - 1]
			this.container.insertBefore(active, this.slides[0])
			this.decorizeSlides()
		}
	}

	nextSlide() {
		this.container.appendChild(this.slides[0])
		this.decorizeSlides()
	}

	setAutoplay() {
		if(!this.autoplay)  return
		const createInterval = () => setInterval(() => { this.nextSlide() }, 5000)

		let interval = createInterval()
		
		this.container.onmouseover = () => {	clearInterval(interval) }
		this.container.onmouseleave = () => { interval = createInterval() }
	}

	init() {
		try{
			this.container.style.cssText = `
				display: flex;
				flex-wrap: wrap;
				overflow: hidden;
				align-items: flex-start;
			`;
	
			this.bindTriggers()
			this.decorizeSlides()
			this.setAutoplay()
		} catch(e) {
			// console.error(e)
		}
	}
}