const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'API_HOST': prod ? 'https://api/products' : 'http://api/products',
}
