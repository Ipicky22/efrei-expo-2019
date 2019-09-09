import users from '~/data/users'
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
    }
}

export default resolvers
