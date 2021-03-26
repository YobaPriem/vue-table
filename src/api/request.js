const request = async (url = '', method = 'GET') => {
    try {
        const response = await fetch(url, {
            method,
        })

        const data = await response.json()

        return data
    } catch (error) {
        throw new Error(error)
    }
}

export default request