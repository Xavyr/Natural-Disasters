const { GraphQLServer } = require('graphql-yoga');
const Disaster = require('./../models/disasterModel');

const typeDefs = `

type Disaster {
  id: ID
  countryName: String,
  countryCode: String,
  disasterTypeId: String,
  disasterType: String,
  timeRangeId: String,
  timeRange: String,
  events: Int,
  deaths: Int,
  peopleAffected: Int
}

type Query {
  allDisasters: [Disaster!]!
  Disaster(id: ID!): Disaster!
  fetchDisaster(id: ID!): Disaster!
}

type Mutation {

}


`;

//, countryName: String, timeRangeId: Int, disasterTypeId: Int

//countryName, timeRangeId, disasterTypeId,

const resolvers = {
  Query: {
    allDisasters: () => {
      return Disaster.find().then(results => results).catch(err => {console.log('cannot retrieve disasters');});
    },
    Disaster: (_, { id }) => {
      const disaster = Disaster.findOne({_id: id}).then(result => {
      console.log('result: ', result);
      return result;
      }).catch(err => console.log('error'));
    },
    fetchDisaster: (_, { id}) => {
      const disaster = Disaster.findOne({_id: id}).then(result => {
      console.log('result: ', result);
      return result._id;
      }).catch(err => console.log('error'));
    }
  },
  Mutation: {

  }
}

const opts = {
  port: 4000,
  endpoint: './graphql'
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  opts
})

server.start(() => console.log(`The server is running on http://localhost:4001`));
