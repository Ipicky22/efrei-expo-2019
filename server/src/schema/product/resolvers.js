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
    }
}

export default resolvers
