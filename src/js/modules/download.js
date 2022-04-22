export default class Download {
	constructor(triggers) {
		this.triggers = document.querySelectorAll(triggers)
		this.path = 'assets/img/mainbg.jpg'
	}

	downloadItem(path){
		const elem = document.createElement('a')

		elem.setAttribute('href', path)
		elem.setAttribute('download', 'picture')

		elem.style.display = 'none'
		document.body.appendChild(elem)

		elem.click()

		document.body.removeChild(elem)
	}

	init() {
		this.triggers.forEach(trigger => {
			trigger.onclick = (e) => {
				e.preventDefault()
				e.stopPropagation()
				this.downloadItem(this.path)
			}
		})
	}
}