const dgram = require('dgram');
const message = new Buffer('reload');
const client = dgram.createSocket('udp4');
const { HOST, PORT } = require('./config/socket')

function MyPlugin(options) {
  // Configure your plugin with options...
}

MyPlugin.prototype.apply = function(compiler) {
  compiler.plugin("compile", function(params) {
    // console.log("The compiler is starting to compile...");
  });

  compiler.plugin("compilation", function(compilation) {
    // console.log("The compiler is starting a new compilation...");

    compilation.plugin("optimize", function() {
      // console.log("The compilation is starting to optimize files...");
    });
  });

  compiler.plugin("emit", function(compilation, callback) {
    // console.log("The compilation is going to emit files...");
    
    client.send(message, PORT, HOST, (err) => {
      if (err) throw err
    })

    callback();
  });
};

module.exports = MyPlugin;