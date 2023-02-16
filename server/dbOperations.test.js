
/* eslint-disable */
// import dbOperations
var ObjectId = require('mongodb').ObjectId; 

const { ObjectID } = require('bson');
// const { ObjectId } = require('mongodb');
const dbModule = require('./dbOperations');

// declare db object
let db;

//MongoDB URL
const url = '';

const newUser = {"_id":"",
"password":"testPW",
"age":"testAge",
};

const userToBeDeleted = {"_id":"",
"password":"testPW",
"age":"testAge",
};