class LogPlugin {
  constructor(options) {
    console.log(options);
  }

  apply(compiler) {

    compiler.hooks.beforeCompile.tapAsync('LogPlugin', (compilation, cb) => {
      compilation.assets['log.txt'] = {
        source: function(){
          return `编译开始时间：${new Date().toLocaleDateString()}`
        },
        size: function(){
          return 20
        }
      }
    })

    compiler.hooks.emit.tapAsync('LogPlugin', (compilation, cb) => {
      compilation.assets['log.txt'] = {
        source: function(){
          return `结束时间：${new Date().toLocaleDateString()}`
        },
        size: function(){
          return 20
        }
      }
      cb()
    })
  }
}

module.exports = LogPlugin;
