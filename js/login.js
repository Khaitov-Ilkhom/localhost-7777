import axois from "../api/axois.js";
import {saveLocalStorageToken} from "../utils/utils.js";

const $loginForm = document.querySelector("#login-form")
const $inputEmail = document.querySelector("#input-email")
const $inputPassword = document.querySelector("#input-password")

function User (email, password) {
    this.email = email
    this.password = password
}

const loginUser = async (e) => {
    e.preventDefault()

    const email = $inputEmail.value
    const password = $inputPassword.value
    const user = new User(email, password)

    try {
        const response = await axois.post("/users/login", user)
        const data = response.data
        if (data.token) {
            console.log(data)
            saveLocalStorageToken("token", data.token)
            $loginForm.innerHTML = "Please Wait..."
            setTimeout( () => {
                location.replace(location.origin + "/pages/profile.html")
            }, 2000)
        }
    } catch (error) {
        $loginForm.innerHTML = error.message
        console.log("error")
    }
}

$loginForm.addEventListener("submit", loginUser)