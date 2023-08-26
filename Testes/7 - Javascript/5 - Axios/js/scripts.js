console.log(axios)
const nome = () =>{

}
const getData = async() =>{
    try{
        const response = await postsFetch.get("/users", 
        {
            headers:{
                "Content-Type": 'application/json',
                custom: "header"
            }
        }
        )

        return response.data
    } catch(error){
        console.log(error)
    }
}

getData()


const container = document.querySelector("#user-container")

const printData = async() => {
    const data = await getData()
    console.log('inicio')

 
    data.forEach((user) =>{

        const div = document.createElement('div')

        const nameElement = document.createElement('h2')

        nameElement.textContent = user.name

        div.appendChild(nameElement)


        const emailElement = document.createElement('p')

        emailElement.textContent = user.email

        div.appendChild(emailElement)

        container.appendChild(div)


    })

}

printData()

// Post

const form = document.querySelector('#post-form')
const titleInput = document.querySelector('#title')
const bodyInput = document.querySelector('#body')

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    postsFetch.post("/posts",{
        title: titleInput.value, 
        body: bodyInput.value, 
        userId: 1
    })
})

