
// // function potato() {
// //   console.log("we clicked")
// //   // return "🦕"
// // }

// // // console.log(potato())
// // console.log(potato)

// // const banana = potato

// // // console.log(banana())

// // const notAFunction = "asdhkauskjas"

// // // notAFunction()

// // document.addEventListener("click", banana)


 

// // delete the poop, bomb, and knife
// let listTag = document.getElementById("blobs")

// // const targetLength = listTag.children.length

// // for (let i = 0; i < targetLength; i++) {
// //   // const child = listTag.children[0];
// //   // child.remove()
// //   console.log(listTag.children)
// // }

// // console.log(document.querySelector("body #blobs li"))
// // console.log(document.querySelector("#blobs li"))
// // console.log(document.querySelector("li"))

// // let blobs = document.querySelectorAll(".js-blobs li")

// // blobs.remove()

// // for (var i = 0; i < blobs.length; i++) {
// //   // console.log(blobs)
// //   blobs[i].remove()
// // }

// // console.log(listTag.innerHTML)
// // listTag.innerHTML = ""


// // actually, let's delete everything but the poop
// const actualArray = Array.from(listTag.children)

// // console.log(actualArray)

// const notPoop = actualArray.filter(function(child){
//   // console.log(child.innerText !== "💩")
//   return child.innerText !== "💩"
// })


// notPoop.forEach(function(mojeElement){
//   // console.log(mojeElement.innerHTML)
//   mojeElement.remove()
// })

// // notPoop.pop()
// // console.log(Array.isArray(actualArray))

// // and update the poop to a doughnut
// let poopEmojiElement = actualArray.find(function(child){
//   return child.innerText === "💩"
// })

// poopEmojiElement.innerText = "🍩"


// // add taco, burger, fries to the list

// function addBlob(moje) {
//   console.log(moje)
//   // console.log(sdfjkh, sdhfkjs, hsdkfjhasdf, sadfhkjsdhf)
//   const newLi = document.createElement("li")
//   // console.log(newLi)
//   newLi.innerText = moje
//   listTag.appendChild(newLi)

// }

// // addBlob("🍟")
// // addBlob("🍔")
// // addBlob("🌮")
// // addBlob("🥥")

// // function callback(emojiString){
// //   addBlob(emojiString)
// // }

// ["🌮", "🍔", "🥥", "🍟"].forEach(addBlob)















