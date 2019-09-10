import products from '~/data/products'
import Expo from 'expo-server-sdk';
let expo = new Expo();

const resolvers = {
    Query: {
        products: async (obj, args, ctx, info) => {
            return products
        }, 
    },
    Mutation: {
        addCard: (obj, args, ctx, info) => {
            const { data } = args
            let card = {
                uuid: data.id,
                name: data.name,
                description: data.description,
                price: data.price,
                picture: data.picture,
                category: data.category              
            }
            products.push(card)
            return card
        }
    },
}

export default resolvers
