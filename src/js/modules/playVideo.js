export default class VideoPlayer {
	constructor(triggers, overlay) {
		this.btns = document.querySelectorAll(triggers)
		this.overlay = document.querySelector(overlay)

		this.close = this.overlay.querySelector('.close')
	}

	bindTriggers() {
		this.btns.forEach(btn => {
			btn.onclick = () => {
				if(btn.querySelector('.play__circle').classList.contains('closed')) return
				this.activeBtn = btn

				const newPath = btn.getAttribute('data-url')
				if(!this.path) {
					this.path = newPath
					this.createPlayer(this.path)
				} if(this.path !== newPath) {
					this.path = newPath
					this.player.loadVideoById({ videoId: this.path })
					this.player.pauseVideo()
				}
				
				this.overlay.style.display = 'flex'
			}
		})
	}

	bindCloseBtn() {
		this.close.onclick = () => {
			this.overlay.style.display = 'none'
			this.player.stopVideo()
		}
	}

	onPlayerStateChange({ data }) {
		let blockedElem, playBtn
		try{
			blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling
			playBtn = this.activeBtn.querySelector('svg').cloneNode(true)
		} catch(e) {}

		if(!blockedElem || data !== 0) return

		const playCircle = blockedElem.querySelector('.play__circle')
		const playText = blockedElem.querySelector('.play__text')

		if(!playCircle.classList.contains('closed')) return

		playCircle.classList.remove('closed')
		blockedElem.querySelector('svg').remove()
		playCircle.appendChild(playBtn)
		playText.textContent = 'play video'
		playText.classList.remove('attention')
		blockedElem.style.opacity = '1'
		blockedElem.style.filter = 'none'
	}

	createPlayer(url) {
		this.player = this.player || 
			new YT.Player('frame', {
					height: '100%',
					width: '100%',
					videoId: String(url),
					events: {
						'onStateChange': this.onPlayerStateChange.bind(this)
					}
				})
	}

	init() {
		if(this.btns.length === 0) return 

		const tag = document.createElement('script')

		tag.src = "https://www.youtube.com/iframe_api"
		const firstScriptTag = document.getElementsByTagName('script')[0]
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

		this.bindTriggers()
		this.bindCloseBtn()
	}
}