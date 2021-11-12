'use strict';
const Funnel = require('broccoli-funnel');
const Merge = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,

  treeForStyles(tree) {
    const myCustomStyles = new Funnel('./lib', {
      destDir: 'app/styles/my-custom-styles',
    });

    return new Merge([myCustomStyles, tree].filter(Boolean));
  },
};
