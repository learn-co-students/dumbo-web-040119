function Person(fullName){
  this.fullName = fullName
}


Person.prototype.breathe = function(){
  console.log("wheee lungs")
}



Person.fakeClassMethod = function(){
  
}


graham = new Person()