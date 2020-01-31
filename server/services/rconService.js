const Rcon = require('rcon-client').Rcon

  class RconService{
    constructor(host, port, password){
        this.host = host
        this.port = port,
        this.password = password;
        this.client = new Rcon({host: this.host, port:this.port, password: this.password})
        this.client.on('authenticated',console.log)
        this.client.on('connect',console.log)
        this.client.on('error',console.log)
        this.client.on('end',console.log)
    }
    async send(data){
        return await this.client.send(data)
    }
}

module.exports = RconService