const { GraphQLServer } = require("graphql-yoga");
const Disaster = require("./models/disasterModel");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const disastersController = require('./controllers/disastersController');

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
    disastersByCountryNameDisasterTypeId: (
      _,
      { countryName, disasterTypeId }
    ) => {
      let obj = { countryName, disasterTypeId };
      return findMethod(obj);
    },
    disastersByDeaths: (_, { deaths }) => {
      let obj = { deaths: { $gte: deaths } };
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
  endpoint: "/graphql",
  playground: '/playground',
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  opts
});

server.express.use(bodyParser.json());
server.express.use(bodyParser.urlencoded({ extended: true }));
server.express.use(express.static(path.join(__dirname, "./../public")));

server.express.get(
  "/getDisasters",
  disastersController.getDisasters,
  (req, res) => {
    res.json(res.locals.disasters);
  }
);

server.start(() =>
  console.log(`The server is running on http://localhost:${opts.port}`)
);




// //npm modules
// const express = require('express');
// const mongoose = require('mongoose');
// const disastersController = require('./controllers/disastersController');
// const fs = require('fs');
// const Disasters = require('./models/disasterModel');

// //files
// const path = require('path');

// //the actual express app instance;
// const app = express();

// //parsing body for post routes
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// //pathing to specific files
// app.use(express.static(path.join(__dirname, './../public')));

// app.get('/getDisasters', disastersController.getDisasters, (req, res) => {
// 	res.json(res.locals.disasters);
// });

// app.listen(3000);
