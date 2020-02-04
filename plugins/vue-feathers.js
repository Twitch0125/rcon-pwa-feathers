import Vue from 'vue'
// Include and set up feathers client
const Feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio-client')
const RconService = require('../server/services/rconService')
const io = require('socket.io-client')

const socket = io('http://localhost:3000/')
const feathers = Feathers()
feathers.use('console', new RconService())
feathers.configure(socketio(socket))






// Include it as a CommonJS module
// const Vue = require('vue')
const vueFeathers = require('vue-feathers')

// And plug it in
Vue.use(vueFeathers, feathers)