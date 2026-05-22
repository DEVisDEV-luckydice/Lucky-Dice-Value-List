const items = [

  {
    name: "Golden Dice",
    value: 500,
    rarity: "Legendary"
  },

  {
    name: "Forest Lantern",
    value: 120,
    rarity: "Rare"
  }

]

const container = document.getElementById("itemContainer")

items.forEach(item => {

  container.innerHTML += `
  
    <div class="item">
      <h2>${item.name}</h2>

      <p>💰 Value: ${item.value}</p>

      <p>⭐ Rarity: ${item.rarity}</p>
    </div>
  
  `

})