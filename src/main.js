const fse = require('fs-extra');
const glob = require('glob');
const path = require('path');

function cleanForPublish(location=process.cwd(), extensions=['.node', '.pdb']) {
  const pattern = path.join(location, 'build', '**', '*.*');
  const modules = glob.sync(pattern)
    .filter(function(file) {
      return !extensions.some(function(extension) {
        return file.indexOf(extension) >= 0;
      })
    });
  console.log(`cleaning ${modules.length} file(s)`);

  modules.forEach(function(file) {
    fse.removeSync(file);
  });
}
module.exports = cleanForPublish;
