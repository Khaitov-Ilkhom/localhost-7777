import axois from "../api/axois.js";

const $card = document.querySelector(".card")
const $name = document.querySelector("#name")
const $email = document.querySelector("#email")
const $admin = document.querySelector("#admin")

const $form = document.querySelector("#form")
const $inputName = document.querySelector("#input-name")
const $inputEmail = document.querySelector("#input-email")

const renderUserInfo = async () => {
    try {
        const response = await axois("/users/profile")
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

const updateUserInfo = async (e) => {
    e.preventDefault()

    const user = {
        name: $inputName.value,
        email: $inputEmail.value
    }

    try {
        const response = await axois.put("/users/profile", user)
        const data = response.data
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
    $loginModal.style.display = "none"
    $form.reset()
}

$form.addEventListener("submit", updateUserInfo)

const $showBtn = document.querySelector("#update")
const $loginModal = document.querySelector("#login-modal")
const $closeModal = document.querySelector(".close-modal")
$showBtn.addEventListener("click", () => {
    $loginModal.style.display = "flex"
})
$closeModal.addEventListener("click", () => {
    $loginModal.style.display = "none"
})
