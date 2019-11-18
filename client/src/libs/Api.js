const Api = {
    get: async (route) => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}${route}`)
        if (!res.ok) {
            throw Error(`${res.status} ${res.statusText}`)
        } else {
            return res.json()
        }
    },
    post: async (route, data) => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}${route}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (!res.ok) {
            throw Error(`${res.status} ${res.statusText}`)
        }
        else {
            return res.json()
        }
    }
}

export default Api;