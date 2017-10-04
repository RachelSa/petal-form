class App {
  constructor(){
    this.form = document.getElementById("petal-form")
    this.options = document.getElementById("petal-options")
    this.answer = document.getElementById("answer")
    this.form.onsubmit = (e) => {
      e.preventDefault()
      this.handleSubmit()
    }
  }

  handleSubmit(){
    let resp = this.options[this.options.selectedIndex].value
    switch(resp) {
      case '':
          this.blankAnswer()
          break;
      case 'Petal':
          this.correctAnswer()
          break;
      default:
          this.incorrectAnswer()
        }

  }

  buildResponse(resp){
    this.answer.innerHTML = ''
    let p = document.createElement("p")
    let text = document.createTextNode(resp)
    p.appendChild(text)
    this.answer.insertAdjacentElement('afterbegin', p)
  }

  correctAnswer(){
    this.buildResponse("Rocks!")
  }

  incorrectAnswer(){
    this.buildResponse("Hmmm... try again.")
  }

  blankAnswer(){
    this.buildResponse("Please select an option.")
  }


}
window.onload = () => new App()
