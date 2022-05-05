
module.exports = {
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: '/add-u',
                destination: '/',
                permanent: true
            }
        ]
    }
}