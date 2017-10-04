class App {
  constructor(){
    this.form = document.getElementById("petal-form")
    this.options = document.getElementById("petal-options")
    this.answer = document.getElementById("answer")
    window.onload = () => this.form.onsubmit = (e) => {
      e.preventDefault()
      this.handleSubmit(this.buildResponse.bind(this))
    }
  }

  handleSubmit(callback){
    let resp = this.options[this.options.selectedIndex].value === "Petal" ? this.correctAnswer() : this.incorrectAnswer()
    callback(resp)
  }

  buildResponse(resp){
    this.answer.innerHTML = ''
    let p = document.createElement("p")
    let text = document.createTextNode(resp)
    p.appendChild(text)
    this.answer.insertAdjacentElement('afterbegin', p)
  }

  correctAnswer(){
    return "Rocks!"
  }

  incorrectAnswer(){
    return "Hmmm... try again."
  }


}
new App()
