class Notifier {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.plugin('done', (stats) => {
      const notifier = require('node-notifier');
      const time = ((stats.endTime - stats.startTime) / 1000).toFixed(2);

      notifier.notify({
        title: this.options.title || require('./package.json').name,
        message: `Build completed!\n${stats.compilation.errors.length} errors in ${time}s`,
        contentImage: this.options.logo || ''
      });
    });
  }
}

module.exports = Notifier;
