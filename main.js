

theContainer = document.getElementById('container')

let filesBtn = document.getElementById('filesBtn')


filesBtn.addEventListener('change', function(e) {
    const reader = new FileReader()
    if (filesBtn.files[0]['type'] != 'text/plain') return;

    reader.onload = function () {
        loadJSON(reader.result)
    }
    reader.readAsText(filesBtn.files[0])
}, false)

function loadJSON(text) {
    console.log(JSON.parse(text)['tasks'][2]['impStatus'])
}


class Div {
    constructor(text, isActivated) {
        this.div = document.createElement('div')
        this.insideDiv = document.createElement('div')
        theContainer.append(this.div)
        this.div.classList.add('div')
        this.addPara(text, this.div)
        this.div.append(this.insideDiv)
        this.addDeleteButton()
        this.addImportantButton()
        if (isActivated == true) {console.log(this)}
    }
    
    addPara(text, place){
        this.para = document.createElement('p')
        this.para.classList.add('para')
        this.para.id = 'para'
        this.para.innerText = text
        place.append(this.para)
    }
    removeDiv() {
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
    }
    makeParaImp() {
        this.parentNode.parentNode.querySelector('#para').classList.toggle('imp')
    }
    addImportantButton() {
        this.impButton = document.createElement('button')
        this.impButton.classList.add('button')
        this.impButton.innerText = 'IMP'
        this.impButton.addEventListener('click', this.makeParaImp)
        this.insideDiv.append(this.impButton)
    }
    addDeleteButton() {
        this.deleteButton = document.createElement('button')
        this.deleteButton.classList.add('button')
        this.deleteButton.innerText = 'Delete'
        this.deleteButton.addEventListener('click', this.removeDiv)
        this.insideDiv.append(this.deleteButton)
    }
}

let listOfDivs = []

function addDiv() {
    if (document.getElementById("sampleText").value != '') {
        listOfDivs.push(new Div(document.getElementById("sampleText").value, true))
    }
}
