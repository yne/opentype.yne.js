import assert from 'assert';
import { parse as parseBuffer } from '../dist/opentype.module.js';
import { parse as parseBufferMin } from '../dist/opentype.module.min.js';
import { readFileSync } from 'fs';
const loadSync = (url, opt) => parseBuffer(readFileSync(url), opt);
const loadSyncMin = (url, opt) => parseBufferMin(readFileSync(url), opt);

describe('opentype.module.js dist', function() {
    it('can work with the uncompressed distribution', function() {
        const font = loadSync('./test/fonts/Roboto-Black.ttf');
        assert.deepEqual(font.names.macintosh.fontFamily, {en: 'Roboto Black'});
        assert.deepEqual(font.names.windows.fontFamily, {en: 'Roboto Black'});
        assert.equal(font.unitsPerEm, 2048);
        assert.equal(font.glyphs.length, 1294);
    });

    it('can work with the compressed dist files', function() {
        const font = loadSyncMin('./test/fonts/Roboto-Black.ttf');
        assert.deepEqual(font.names.macintosh.fontFamily, {en: 'Roboto Black'});
        assert.deepEqual(font.names.windows.fontFamily, {en: 'Roboto Black'});
        assert.equal(font.unitsPerEm, 2048);
        assert.equal(font.glyphs.length, 1294);
    });
});

describe('opentype.module.js dist on low memory mode', function() {
    it('can work with the uncompressed distribution', function() {
        const font = loadSync('./test/fonts/Roboto-Black.ttf', {lowMemory: true});
        assert.deepEqual(font.names.macintosh.fontFamily, {en: 'Roboto Black'});
        assert.deepEqual(font.names.windows.fontFamily, {en: 'Roboto Black'});
        assert.equal(font.unitsPerEm, 2048);
        assert.equal(font.glyphs.length, 0);
    });

    it('can work with the compressed dist files', function() {
        const font = loadSyncMin('./test/fonts/Roboto-Black.ttf', {lowMemory: true});
        assert.deepEqual(font.names.macintosh.fontFamily, {en: 'Roboto Black'});
        assert.deepEqual(font.names.windows.fontFamily, {en: 'Roboto Black'});
        assert.equal(font.unitsPerEm, 2048);
        assert.equal(font.glyphs.length, 0);
    });
});

