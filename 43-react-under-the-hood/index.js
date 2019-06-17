document.addEventListener("DOMContentLoaded", () => {
  const htmlObj = {
    tagName: "div",
    properties: {
      id: "greeting", 
      className: "beef", 
      dataId: "2"
    },
    children: [
      "Hello!",
      {tagName: "h1", properties: {id: "title"}, children: ["Wat"]},
      {tagName: "h1", properties: {id: "title"}, children: ["Wat"]},
      {tagName: "div", properties: {className: "steak"}, children: ["Lettuce"]}
    ]
  }

  function render(htmlObj){
    // create the element
    const newEl = document.createElement(htmlObj.tagName)
    // give it attributes
    for(const propName in htmlObj.properties){
      newEl[propName] = htmlObj.properties[propName]
    }
    // give it children
    htmlObj.children.forEach(child => {
      if (typeof child === "string"){
        newEl.append(child)
      } else {
        newEl.append(render(child))
      }
    })

    return newEl
  }

  document.getElementById("root").append(render(htmlObj))
})