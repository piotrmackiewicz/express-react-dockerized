const getPing = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/ping`)
        .then(res => {
            if (!res.ok) {
                throw Error(`${res.status} ${res.statusText}`)
            } else {
                return res.json()
            }
        })
}

export { getPing };