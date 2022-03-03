const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: [
                { id: 1, size: 'x-small' },
                { id: 2, size: 'small' },
                { id: 3, size: 'medium' },
                { id: 4, size: 'large' },
                { id: 5, size: 'x-large' }
            ]
            
        }
    }
})
