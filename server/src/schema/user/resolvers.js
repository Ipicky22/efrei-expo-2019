import users from '~/data/users'
import products from '~/data/products'
import Expo from 'expo-server-sdk';
let expo = new Expo();

const resolvers = {
    Query: {
        users: async (obj, args, ctx, info) => {
            return users
        },
        user: async (obj, args, ctx, info) => {
            return users.find((user) => user.id === args.id)
        }
    },

    Mutation: {
        editUser: (obj, args, ctx, info) => {
        const { data } = args 
        const index = users.findIndex((user) => user.id === args.id);
        users[index] = {
        ...users[index],
        firstname: data.firstname || users[index].firstname,
        lastname: data.lastname || users[index].lastname,
        email: data.email || users[index].email,
        city: data.city || users[index].city,
        address: data.address || users[index].address,
        state: data.state || users[index].state
        }
        return users.find((user) => user.id === args.id)
        }
    },
}

export default resolvers
