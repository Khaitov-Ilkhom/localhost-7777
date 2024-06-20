import axois from "../api/axois.js";
import {saveLocalStorageToken} from "../utils/utils.js";

const $registerForm = document.querySelector("#register-form")
const $inputName = document.querySelector("#input-name")
const $inputEmail = document.querySelector("#input-email")
const $inputPassword = document.querySelector("#input-password")

function User (name, email, password) {
    this.name = name
    this.email = email
    this.password = password
}

const createUser = async (e) => {
    e.preventDefault()

    const name = $inputName.value
    const email = $inputEmail.value
    const password = $inputPassword.value
    const user = new User(name, email, password)

    try {
        const response = await axois.post("/users", user)
        const data = response.data
        if (data.token) {
            saveLocalStorageToken("token", data.token)
            $registerForm.innerHTML = "Please Wait..."
            setTimeout( () => {
                location.replace(location.origin + "/pages/home-page.html")
            }, 2000)
        }
    } catch (error) {
        $registerForm.innerHTML = error.message
        console.log("error")
    }
}

$registerForm.addEventListener("submit", createUser)