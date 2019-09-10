import products from '~/data/products'
import Expo from 'expo-server-sdk';
let expo = new Expo();

const resolvers = {
    Query: {
        products: async (obj, args, ctx, info) => {
            return products
        },
        search: async (obj, args, ctx, info) => {
            const { q } = args
            return products.filter(({ name }) => {
                const fullName = [name].join(' ');
                return fullName.toLowerCase().indexOf(q.toLowerCase()) > -1;
            })
        },
        mine: async (obj, args, ctx, info) => {
            const { q } = args
            return products.filter(({ idUser }) => {
                return q === idUser
            })
        }
    }
}

export default resolvers