const postUser = (userData) => {
    return fetch(`${process.env.REACT_APP_API_URL}/user`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return err.json()
        })
}

const getUsers = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/user`)
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return err.json()
        })
}

export { getUsers, postUser };