import Accordion from "./modules/accordion"
import Difference from "./modules/difference"
import Download from "./modules/download"
import VideoPlayer from "./modules/playVideo"
import MainSlider from "./modules/slider/slider-main"
import MiniSlider from "./modules/slider/slider-mini"


window.addEventListener('DOMContentLoaded', () => {
	new MainSlider({ container: '.page', btns: '.next' }).render()
	new MainSlider({ container: '.moduleapp', btns: '.next', prev: '.prevmodule', next: '.nextmodule' }).render()

	const showUpSlider = new MiniSlider({
		container: '.showup__content-slider',
		prev: '.showup__prev',
		next: '.showup__next',
		activeClass: 'card-active',
		animate: true
	})
	showUpSlider.init()

	const modulesSlider = new MiniSlider({
		container: '.modules__content-slider',
		prev: '.modules__info-btns .slick-prev',
		next: '.modules__info-btns .slick-next',
		activeClass: 'card-active',
		animate: true,
		autoplay: true
	})
	modulesSlider.init()

	const feedSlider = new MiniSlider({
		container: '.feed__slider-items',
		prev: '.feed__slider .slick-prev',
		next: '.feed__slider .slick-next',
		activeClass: 'feed__item-active'
	})
	feedSlider.init()


	new VideoPlayer('.showup .play', '.overlay').init()
	new VideoPlayer('.module__video-item .play', '.overlay').init()

	new Difference('.officerold', '.officerold .officer__card-item').init()
	new Difference('.officernew', '.officernew .officer__card-item').init()

	new Accordion('.module__info-show').init()
	new Download('.download').init()
})