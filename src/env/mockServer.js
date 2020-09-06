var fastGraphqlMock = require("fast-graphql-mock")

const schema = fastGraphqlMock.mockSchema('./src/env/schema.graphql')
const server = fastGraphqlMock.createMockServer(schema)
fastGraphqlMock.startMockServer(server, 4000)