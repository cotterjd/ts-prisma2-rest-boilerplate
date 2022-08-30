#!/bin/node

const fetch = require(`isomorphic-fetch`)
const assert = require(`assert`)
const printRed = str => console.log(`\x1b[31m %s \x1b[37m`, str)
const printGreen = str => console.log(`\x1b[32m %s \x1b[37m`, str)
const fail = errorStr => Promise.reject(errorStr)
const testServer = () => {
  return new Promise((resolve, reject) => {
     console.log(`Testing Server...`)
     fetch(`http://localhost:4000/graphql`, {
       method: `POST`,
       headers: {
         'Content-Type': `application/json`,
       },
       body: JSON.stringify({ query: `query { __typename }` }),
     }).then(r => r.json()).then(resolve).catch(reject) 
  })
}
const testCreateMyEntity = () => {
  console.log(`Testing POST /`)
  return new Promise((resolve, reject) => {
     fetch(`http://localhost:4000/`, {
       method: `POST`,
       headers: {
         'Content-Type': `application/json`,
       },
       body: JSON.stringify({
         name: "John",
         email: "john7@gmail.com",
         skills: { cSharp: 9 },
       }),
     }).then(r => r.json()).then(resolve).catch(reject) 
  })
}
const testListMyEntities = () => {
  console.log(`Testing GET /`)
  return new Promise((resolve, reject) => {
     fetch(`http://localhost:4000/`, {
       method: `GET`,
       headers: {
         'Content-Type': `application/json`,
       },
     }).then(r => r.json()).then(resolve).catch(reject) 
  })
}
const testPut = (id) => {
  return new Promise((resolve, reject) => {
     fetch(`http://localhost:4000/${id}`, {
       method: `PUT`,
       headers: {
         'Content-Type': `application/json`,
       },
       body: JSON.stringify({
         skills: JSON.stringify({
           python: 3
         })
       }),
     }).then(r => r.json()).then(resolve).catch(reject) 
  })
}
const testBadPut = (id) => {
  console.log(`Testing PUT /`)
  return testPut(`foo`) 
}
const testPutMyEntity = (id) => {
  console.log(`Testing PUT /`)
  return testPut(id) 
}
const testDeleteMyEntity = (id) => {
  console.log(`Testing DELETE /`)
  return new Promise((resolve, reject) => {
     fetch(`http://localhost:4000/${id}`, {
       method: `DELETE`,
     }).then(r => r.json()).then(resolve).catch(reject) 
  })
}


let myEntityId = 13 
function runTests () {
  testServer()
    .then(res => {
        assert.ok(res)
        assert.ok(res.data)
        assert.equal(res.data.__typename, `Query`, `data should have typename of 'Query', but got ${res.data.__typename}`)
        printGreen(`passed`)
     })
     .then(testCreateMyEntity)
     .then(myEntity => {
         // console.log(myEntity)
         myEntityId = myEntity.id
         assert.ok(myEntity)
         printGreen(`passed`)
     })
     .then(testListMyEntities)
     .then(myEntities => {
         // console.log(myEntities)
         assert.ok(myEntities)
         printGreen(`passed`)
     })
     .then(_ => testBadPut(myEntityId))
     .then(res => {
       // console.log(res)
       assert.ok(!res.id)
       assert.ok(res.error)
       printGreen(`passed`)
     })
     .then(_ => testPutMyEntity(myEntityId))
     .then(updateMyEntity => {
       // console.log(updateMyEntity)
       assert.ok(updateMyEntity.id)
       printGreen(`passed`)
     })
     .then(_ => testDeleteMyEntity(myEntityId))
     .then(res => {
         assert.ok(res)
         assert.ok(res.id)
         printGreen(`passed`)
     })
     .catch(printRed)
     .finally(_ => {
       console.log(`Tear down`)
       testDeleteMyEntity(myEntityId)
     })
}

runTests()
