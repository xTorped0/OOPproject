import Slider from "./slider"

export default class MainSlider extends Slider {
	constructor({ prev, next }) {
		super(...arguments)

		this.prev = document.querySelectorAll(prev)
		this.next = document.querySelectorAll(next)
	}

	showSlides(n) {
		this.slideIndex = n > this.slides.length ? 1 : n < 1 ? this.slides.length : n	

		if(this.hanson) {
			this.hanson.style.opacity = '0'

			if(n === 3) {
				this.hanson.classList.add('animated')

				setTimeout(() => {
					this.hanson.style.opacity = 1
					this.hanson.classList.add('slideInUp')
				}, 3000)
			} else {
				this.hanson.classList.remove('slideInUp')
			}
		}

		this.slides.forEach(slide => {
			slide.style.display = 'none'
		})

		this.slides[this.slideIndex - 1].style.display = 'block'
	}

	plusSlides(n) {
		this.showSlides(this.slideIndex += n)
	}

	bindTriggers() {
		this.btns.forEach(btn => {
			btn.onclick = () => { this.plusSlides(1) }

			btn.parentNode.previousElementSibling.onclick = (e) => {
				e.preventDefault()

				this.slideIndex = 1

				this.showSlides(this.slideIndex)
			}
		})

		this.prev.forEach(btn => {
			btn.onclick = (e) => { 
				e.preventDefault()
				e.stopPropagation()
				this.plusSlides(-1) 
			}
		})

		this.next.forEach(btn => {
			btn.onclick = (e) => { 
				e.preventDefault()
				e.stopPropagation()
				this.plusSlides(1) 
			}
		})
	}

	render() {
		if(!this.container) return

		try {
			this.hanson = document.querySelector('.hanson')
		} catch(err) {
			// console.error(err);
		}
		
		this.bindTriggers()
		this.showSlides(this.slideIndex)
	}
}