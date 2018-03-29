const { GraphQLServer } = require("graphql-yoga");
const Disaster = require("./../models/disasterModel");

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
  Disaster(id: ID!): [Disaster]!
  disastersByCountryId(id: ID!): [Disaster]!
  disastersByTimeRangeId(timeRangeId: Int!): [Disaster]!
  disastersByCountryName(countryName: String): [Disaster]!
  
  disastersByCountryNameTimeRangeId(countryName: String!, timeRangeId: Int!): [Disaster]!
  disastersByCountryNameDisasterTypeId(countryName: String!, disasterTypeId: Int!): [Disaster]!
  disastersByDeaths(deaths: Int!): [Disaster]!
}`;

const resolvers = {
  Query: {
    allDisasters: () => {
      return findMethod({});
    },
    disastersByCountryId: (_, { id }) => {
      let obj = { _id: id };
      return findMethod(obj);
    },
    disastersByCountryName: (_, { countryName }) => {
      let obj = { countryName };
      return findMethod(obj);
    },
    disastersByTimeRangeId: (_, { timeRangeId }) => {
      let obj = { timeRangeId };
      return findMethod(obj);
    },
    disastersByCountryNameTimeRangeId: (_, { countryName, timeRangeId }) => {
      let obj = { countryName, timeRangeId };
      return findMethod(obj);
    },
    disastersByCountryNameDisasterTypeId: (_, { countryName, disasterTypeId }) => {
      let obj = { countryName, disasterTypeId };
      return findMethod(obj);
    },
    disastersByDeaths: (_, { deaths }) => {
      let obj = { deaths: {"$gte": deaths }};
      return findMethod(obj);
    }
  }
};

const findMethod = obj => {
  return Disaster.find(obj)
    .then(result => {
      // console.log(result);
      return result;
    })
    .catch(err => {
      console.log("error");
    });
};

const opts = {
  port: 4000,
  endpoint: "./graphql"
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  opts
});

server.start(() =>
  console.log(`The server is running on http://localhost:4000`)
);
