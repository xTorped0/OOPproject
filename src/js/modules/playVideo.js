export default class VideoPlayer {
	constructor(triggers, overlay) {
		this.btns = document.querySelectorAll(triggers)
		this.overlay = document.querySelector(overlay)

		this.close = this.overlay.querySelector('.close')
	}

	bindTriggers() {
		this.btns.forEach(btn => {
			btn.onclick = () => {
				const path = btn.getAttribute('data-url')

				this.createPlayer(path)
			}
		})
	}

	bindCloseBtn() {
		this.close.onclick = () => {
			this.overlay.style.display = 'none'
			this.player.stopVideo()
		}
	}

	play() {
		
	}

	createPlayer(url) {
		this.player = this.player || new YT.Player('frame', {
			height: '100%',
			width: '100%',
			videoId: String(url),
			// events: {
			// 	'onReady': onPlayerReady,
			// 	'onStateChange': onPlayerStateChange
			// }
		})

		this.overlay.style.display = 'flex'
	}

	init() {
		const tag = document.createElement('script')

		tag.src = "https://www.youtube.com/iframe_api"
		const firstScriptTag = document.getElementsByTagName('script')[0]
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

		this.bindTriggers()
		this.bindCloseBtn()
	}
}