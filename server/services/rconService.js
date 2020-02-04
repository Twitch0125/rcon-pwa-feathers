const Rcon = require('rcon-client').Rcon

class RconService {
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
}

//   class RconService{
//     constructor(host, port, password){
//         this.host = host
//         this.port = port,
//         this.password = password;
//         this.client = new Rcon({host: this.host, port:this.port, password: this.password})
//         this.client.on('authenticated',console.log)
//         this.client.on('connect',console.log)
//         this.client.on('error',console.log)
//         this.client.on('end',console.log)
//     }
//     async send(data){
//         return await this.client.send(data)
//     }
// }

module.exports = RconService
