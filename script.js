// script.js

const items = [

  {

    name: "Paranoia Dice",

    value: 1650,

    demand: 7,

    stability: "Rising",

    rarity: "Secret",

    image:
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"

  },

  {

    name: "Galaxy Dice",

    value: 300,

    demand: 3,

    stability: "Stable",

    rarity: "Exotic",

    image:
    "https://images.unsplash.com/photo-1520034475321-cbe63696469a?q=80&w=1200&auto=format&fit=crop"

  },

  {

    name: "이색",

    value: 6974,

    demand: 1,

    stability: "Dropping",

    rarity: "Common",

    image:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"

  }

]

const itemContainer =
document.getElementById("itemContainer")

const searchBar =
document.getElementById("searchBar")

function getDemandClass(demand) {

  if(demand <= 3)
    return "demand-low"

  if(demand <= 6)
    return "demand-medium"

  if(demand <= 8)
    return "demand-high"

  return "demand-insane"
}

function loadItems(filteredItems) {

  itemContainer.innerHTML = ""

  filteredItems.forEach(item => {

    itemContainer.innerHTML += `

      <div class="card">

        <img src="${item.image}">

        <div class="itemName">
          ${item.name}
        </div>

        <div class="rarityBar ${item.rarity.toLowerCase()}">
          ${item.rarity}
        </div>

        <div class="stat">
          💰 Value: ${item.value}
        </div>

        <div class="stat ${getDemandClass(item.demand)}">
          🔥 Demand: ${item.demand}/10
        </div>

        <div class="stat ${item.stability.toLowerCase()}">
          📊 Stability: ${item.stability}
        </div>

      </div>

    `

  })

}

loadItems(items)

searchBar.addEventListener("input", () => {

  const value =
  searchBar.value.toLowerCase()

  const filtered =
  items.filter(item =>

    item.name
    .toLowerCase()
    .includes(value)

  )

  loadItems(filtered)

})

function showPage(pageId) {

  document
  .getElementById("valuePage")
  .classList
  .add("hidden")

  document
  .getElementById("calculatorPage")
  .classList
  .add("hidden")

  document
  .getElementById(pageId)
  .classList
  .remove("hidden")

}