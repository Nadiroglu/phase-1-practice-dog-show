// document.addEventListener('DOMContentLoaded', () => {

// })


fetch("http://localhost:3000/dogs")
.then(res => res.json())
.then(data => {
    console.log(data)
    for (dogs of data ){
        console.log(dogs)
        renderDog(dogs)
    }
    
})

const renderDog = (dogsObject) => {
    let tBody = document.getElementById("table-body");

    let tRaw = document.createElement('tr')


    let tdName = document.createElement('td')
    tdName.textContent = dogsObject.name

    let tdBreed = document.createElement('td')
    tdBreed.textContent = dogsObject.breed

    let tdSex = document.createElement('td')
    tdSex.textContent = dogsObject.sex

    let button = document.createElement('td')
    button.innerHTML = "<button> Edit Dog </button>"
    

    tBody.append(tRaw)
    console.log(tBody)

    tRaw.append(tdName, tdBreed, tdSex, button)
}

let form = document.getElementById('dog-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let newDog = {
        name: e.target["name"].value,
        breed:e.target["breed"].value,
        sex: e.target["sex"].value
    }
    console.log(newDog)
    renderDog(newDog, alert)
    alert('Hey I am at the bottom')
})


