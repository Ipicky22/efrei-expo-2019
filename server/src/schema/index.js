import { mergeSchemas } from 'graphql-tools'
import userSchema from './user'

const schema = mergeSchemas({
    schemas: [
        userSchema,
        productSchema
    ],
})

export default schema
