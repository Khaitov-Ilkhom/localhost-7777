import axois from "../api/axois.js";

const $card = document.querySelector(".card")
const $name = document.querySelector("#name")
const $email = document.querySelector("#email")
const $admin = document.querySelector("#admin")

const renderUserInfo = async () => {
    try {
        const response = await axois("/users/profile", {
            headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
        })
        const data = response.data

        $name.innerText = data.name
        $email.innerText = data.email
        $admin.innerText = data.isAdmin ? "You are an admin" : "You are not an admin"
    } catch (error) {
        $card.innerHTML = error.message
        console.log("error")
    }
}
renderUserInfo()

// fetch("http://localhost:7777/users/profile", {
//     headers: {
//         "Content-Type" : "application/json",
//         "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmM0ZTI2YmM4NTEyMGMzY2JlMDM0NSIsImlhdCI6MTcxODM3NTE4OCwiZXhwIjoxNzIwOTY3MTg4fQ.p7rw_JKnIKreJkZo6ATmSE-zbLPKC7R5Om5LGxZ1L20"
//     }
// })
//     .then(res => res.json())
//     .then(data => console.log(data))