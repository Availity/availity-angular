'use strict';

const fs = require('fs');
const mode = require('stat-mode');
const matter = require('gray-matter');
const utf8 = require('is-utf8');

function readFile(metal, file) {

  let ret = {};

  try {
    const frontmatter = metal.frontmatter();
    const stats = fs.statSync(file);
    const buffer = fs.readFileSync(file);
    let parsed;

    if (frontmatter && utf8(buffer)) {
      try {
        parsed = matter(buffer.toString());
      } catch (e) {
        const err = new Error('Invalid frontmatter in the file at: ' + file);
        err.code = 'invalid_frontmatter';
        throw err;
      }

      ret = parsed.data;
      ret.contents = new Buffer(parsed.content);
    } else {
      ret.contents = buffer;
    }

    ret.mode = mode(stats).toOctal();
    ret.stats = stats;
    ret.path = file;

  } catch (e) {

    if (e.code === 'invalid_frontmatter') throw e;

    e.message = 'Failed to read the file at: ' + file + '\n\n' + e.message;
    e.code = 'failed_read';
    throw e;

  }

  return ret;
}

module.exports = readFile;
