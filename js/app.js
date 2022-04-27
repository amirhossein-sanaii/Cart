let Products = [{
        name: 'Book1',
        description: 'Documentation and examples for Bootstraps powerful responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.',
        price: 450000,
        image: '../image/3.jpg',
        id: 82,
        date: '22 march 2022'
    },
    {
        name: 'Book2',
        description: 'Documentation and examples for Bootstraps powerful responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.',
        price: 350000,
        image: '../image/4.jpg',
        id: 12,
        date: '22 march 2022'
    }
]


document.querySelector('#formAddcart').addEventListener('submit', function(params) {
    params.preventDefault()

    if (params.target.name.value.length == 0 || params.target.description.value.length == 0 || params.target.price.value.length == 0 || params.target.imge.value.length == 0) {
        alert('Please enter all values')
    } else {
        console.log(`../image/${params.target.imge.value.slice(12)}`)
        let newProduct = {
                name: params.target.name.value,
                description: params.target.description.value,
                price: params.target.price.value,
                image: `../image/${params.target.imge.value.slice(12)}`,
                id: Math.floor(Math.random() * 9999999),
                date: new Date()
            }
            // console.log(Products)
        Products.push(newProduct)
        params.target.name.value = ''
        params.target.description.value = ''
        params.target.price.value = ''
        params.target.imge.value = ''

        Products.forEach(function(item) {
            let htm = `
                <div class="card">
                <img class="card-img-top" src="${item.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <a href="../html/edit-cart.html" class="btn btn-primary">Edit</a>
                    <a href="#" class="btn btn-primary">Remoove</a>
                    <a href="#" class="btn btn-primary">Add to preis</a>
                </div>
                </div><br><br>`

            let newdiv = document.createElement('div')
            newdiv.className = `class${item.id}`
            document.body.appendChild(newdiv)

            document.querySelector(`.class${item.id}`).innerHTML = htm
        })

    }
})

Products.forEach(function(item) {
    let htm = `
        <div class="card">
        <img class="card-img-top" src="${item.image}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <a href="../html/edit-cart.html" class="btn btn-primary">Edit</a>
            <a href="#" class="btn btn-primary">Remoove</a>
            <a href="#" class="btn btn-primary">Add to preis</a>
        </div>
        </div><br><br>`

    let newdiv = document.createElement('div')
    newdiv.className = `class${item.id}`
    document.body.appendChild(newdiv)

    document.querySelector(`.class${item.id}`).innerHTML = htm
})