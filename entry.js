export default function Entry({title, description}) {
    this.title = title
    this.description = description
    // console.log(this.title, this.description);

    this.entryDiv = document.createElement('div')
    this.headerDiv = document.createElement('div')
    this.deleteButton = document.createElement('button')
    this.titleDisplay = document.createElement('h2')
    this.descriptionDisplay = document.createElement('p')

    this.titleDisplay.textContent = this.title
    this.descriptionDisplay.textContent = this.description
    this.deleteButton.textContent = "DEL"


    this.headerDiv.append(this.titleDisplay, this.deleteButton)
    this.headerDiv.classList.add('entry-header')
    this.entryDiv.classList.add('entry')

    this.entryDiv.append(this.headerDiv)
    this.entryDiv.append(this.descriptionDisplay)

    this.deletepost = (arr) => {
        console.log('runs');
        const found = arr.find((el) => el.title === this.title)
        console.log(found);
        console.log(arr.indexOf(found))
        arr.splice(arr.indexOf(found), 1)
        localStorage.setItem('entries', JSON.stringify(arr))
    }

    document.querySelector('main').append(this.entryDiv)
}