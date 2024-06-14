export const saveLocalStorageToken = (key, token) => {
    if(typeof token === "object" && token !== null){
        localStorage.setItem(key, JSON.stringify(token))
    }
    else{
        localStorage.setItem(key, token)
    }
}