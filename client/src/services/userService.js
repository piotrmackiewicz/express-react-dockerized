import Api from '../libs/Api'

const postUser = (userData) => Api.post('/user', userData)

const getUsers = () => Api.get('/user')

export { getUsers, postUser };