
class CupcakeList {

  constructor(cupcakesData) {
    this.ul = document.createElement("ul")
    document.body.append(this.ul)
    this.cupcakeInstances = cupcakesData.map(function(dataForOneCupcake){
      return new Cupcake(dataForOneCupcake)
    })
    this.render()
    // console.log(this.cupcakeInstances)
  }

  render(){
    const whatever = this.cupcakeInstances.map(function(cupcake){
      return cupcake.render()
    })
    console.log(whatever)
    this.ul.append(...whatever)
  }

}