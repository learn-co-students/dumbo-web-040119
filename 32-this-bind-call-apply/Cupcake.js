
class Cupcake {

  constructor(data) {
    this.id = data.id
    this.flavor = data.flavor
    this.sprinkles = data.sprinkles
  }

  render() {
    this.li = document.createElement("li")
    this.li.innerText = this.flavor

    this.li.addEventListener("click", () => {
      alert(this.flavor)
    })
    return this.li
  }

}
