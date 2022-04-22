export default class Slider {
	constructor({ 
			container = null, btns = null, next = null, prev = null,
			activeClass = '',
			animate, 
			autoplay
		} = {}) {
		this.container = document.querySelector(container)
		this.btns = document.querySelectorAll(btns) || []
		this.slides = this.container && this.container.children

		this.prev = document.querySelector(prev)
		this.next = document.querySelector(next)

		this.activeClass = activeClass
		this.animate = animate
		this.autoplay = autoplay

		this.slideIndex = 1
	}
}