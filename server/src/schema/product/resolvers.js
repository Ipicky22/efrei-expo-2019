import products from '~/data/products'
import Expo from 'expo-server-sdk';
let expo = new Expo();

const resolvers = {
    Query: {
        products: async (obj, args, ctx, info) => {
            return products
        }
        // },
        // Mutation: {
        //
    }
}

export default resolvers