import Client from 'shopify-buy'

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
    domain: 'ifresh-garden.myshopify.com',
    storefrontAccessToken: 'b76bf1e9e22ff255f76178c6293e444c'
});

export { client };