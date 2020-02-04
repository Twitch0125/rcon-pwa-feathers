// const Rcon = require('rcon-client').Rcon
import {Rcon} from 'rcon-client'

export default class RconService {
  async find(params) {}
  async get(id, params) {}
  async create(data, params) {
    const { host, port, password, id } = data
    this.client = new Rcon({ host, port, password })
    return this.client
  }
  async update(id, data, params) {}
  async patch(id, data, params) {}
  async remove(id, params) {}
  setup(app, path){}
}

// module.exports = RconService
