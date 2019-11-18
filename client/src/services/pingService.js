const getPing = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/ping`)
        .then(res => {
            return res.json()
        })
        .catch(err => {
            return err.json()
        })
}

export { getPing };