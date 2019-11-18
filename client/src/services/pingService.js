import Api from '../libs/Api'

const getPing = () => Api.get('/ping')

export { getPing };