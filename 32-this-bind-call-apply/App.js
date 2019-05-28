

class App {

  constructor(){
    fetch("http://localhost:3000/cupcakes")
      .then((res) => res.json())
      .then((data) => new CupcakeList(data))
  }


}

