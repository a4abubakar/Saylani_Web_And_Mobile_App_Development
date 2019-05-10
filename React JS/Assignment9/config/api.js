function selectCategory() {
    return new Promise((resolve, reject) => {
        fetch("https://data.police.uk/api/crime-categories")
            .then(res => res.json())
            .then(res => {
                resolve(res)
            })
            .catch(e => {
                reject({ message: "Something Went Wrong" })
            })
    })
}
function selectForce() {
    return new Promise((resolve, reject) => {
        fetch("https://data.police.uk/api/forces")
            .then(res => res.json())
            .then(res => {
                resolve(res)
            })
            .catch(e => {
                reject({ message: "Something Went Wrong" })
            })
    })
}

export {
    selectCategory, selectForce
}