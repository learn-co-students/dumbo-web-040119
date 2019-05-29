// What is destructuring and why would I want to do it?
  
    
//   const borough = {
//     name: "Brooklyn",
//     population: 2636735,
//     founded: 1643,
//     "baseball Team": "Nets"
//   }
// // 
//   // const name = borough.name;
//   // const population = borough.population;
//   // const founded = borough.founded;
//   const { name, population, founded: foundingYear } = borough;

//   // could we do all of the above in one line?

//   console.log(name, population, foundingYear)

//   // console.log(borough)
//   // console.log(basketballTeam)
//   // console.log(basketballTeam)

//   console.log((new Date()).getFullYear() - foundingYear + " years ago")
  

// Could I rename variables as I destructure them?


// Could I do it to an array?
  
  /*
  
  const boroughNames = ["Brooklyn", "Manhattan", "Bronx", "Queens", "Staten Island"];

  // const bestBorough = boroughNames[0]
  // const boroughWithAlltheAirports = boroughNames[3]

  console.log(bestBorough)
  console.log(boroughWithAlltheAirports)
*/

// Could I do it to the parameters of a function?

  
  const spiceGirls = [
    {
      spicyName: "Ginger",
      legalName: "Geri Halliwell",
      successfulSoloCareer: true, 
      participatingIn2019ReunionTour: true
    },
    {
      spicyName: "Scary",
      legalName: "Melanie Brown",
      successfulSoloCareer: true, 
      participatingIn2019ReunionTour: true
    },
    {
      spicyName: "Baby",
      legalName: "Emma Bunton",
      successfulSoloCareer: "😬", 
      participatingIn2019ReunionTour: true
    },
    {
      spicyName: "Posh",
      legalName: "Victoria Beckham (née adams)",
      successfulSoloCareer: false, 
      participatingIn2019ReunionTour: false
    },
    {
      spicyName: "Sporty",
      legalName: "Melanie Chisolm",
      successfulSoloCareer: true, 
      participatingIn2019ReunionTour: true
    },
  ]

  function greet({ spicyName, participatingIn2019ReunionTour: touring }) {
    // can we make this function shorter?

    // const spicyName = spice.spicyName;
    // const touring = spice.participatingIn2019ReunionTour;

    let emoticon = ""
    if (touring)
      emoticon = ":D"
    else
      emoticon =  "-_-";

    return `Hello, ${ spicyName } Spice! ${ emoticon }`
  }

  const me = { 
    spicyName: "Graham", 
    participatingIn2019ReunionTour: "hell yeah",
    age: 33,
    abilityToDoTheSplitz: 0,
  };

  console.log(spiceGirls.map(greet).join("\r\n\r\n"))
  // console.log(greet(me))









