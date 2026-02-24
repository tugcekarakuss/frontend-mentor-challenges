const cards = document.querySelector(".cards")
const timeButtons = document.querySelectorAll(".timeframes button")
async function loadData(timeframe) {
    const response = await fetch("./data.json")
    const data = await response.json()
    cards.innerHTML = ""
    data.forEach(item => {
        const card = document.createElement("div")
        card.innerHTML = `
            <div class="card-content">
                <div class="card-header">
                     <span>${item.title}</span>
                     <img src="images/icon-ellipsis.svg" alt="">
                </div>
                <div class="card-body">
                    <h2>${item.timeframes[timeframe].current}hrs</h2>
                    <p>Last Week - ${item.timeframes[timeframe].previous}hrs</p>
                </div>
            </div>
        `
        const titleClass = item.title.toLowerCase().replace(" ", "")
        card.classList.add("card", titleClass)
        cards.appendChild(card)
    })
}

timeButtons.forEach(button => {
    button.addEventListener("click", () => {

        timeButtons.forEach(btn => {
            btn.classList.remove("active")
        })

        button.classList.add("active")
        const timeframe = button.textContent.trim().toLowerCase()
        loadData(timeframe)
    })
})
loadData("daily")