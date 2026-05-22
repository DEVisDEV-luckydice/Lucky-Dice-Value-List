const items = [

  {
    name: "Golden Dice",
    value: "500",

    image:
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
  },

  {
    name: "Forest Lantern",
    value: "120",

    image:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
  },

  {
    name: "Golden Dice",
    value: "500",

    image:
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
  },

  {
    name: "Golden Dice",
    value: "500",

    image:
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
  },

  {
    name: "Golden Dice",
    value: "500",

    image:
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
  },

  {
    name: "Golden Dice",
    value: "500",

    image:
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
  },

  {
    name: "Golden Dice",
    value: "500",

    image:
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
  },

  {
    name: "Golden Dice",
    value: "500",

    image:
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
  },

  {
    name: "Golden Dice",
    value: "500",

    image:
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
  },

  {
    name: "Golden Dice",
    value: "500",

    image:
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
  },

  {
    name: "Golden Dice",
    value: "500",

    image:
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
  },

  {
    name: "Golden Dice",
    value: "500",

    image:
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
  },

]

const itemContainer =
document.getElementById("itemContainer")

items.forEach(item => {

  itemContainer.innerHTML += `

    <div class="card">

      <img src="${item.image}">

      <div class="cardContent">

        <div class="itemName">
          ${item.name}
        </div>

        <div class="value">
          💰 ${item.value}
        </div>

      </div>

    </div>

  `

})

function showPage(pageId) {

  const pages =
  document.querySelectorAll(".page")

  pages.forEach(page => {

    page.classList.add("hidden")

  })

  document
  .getElementById(pageId)
  .classList
  .remove("hidden")

}