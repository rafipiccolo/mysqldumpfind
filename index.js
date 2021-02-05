#!/usr/bin/env node

'use strict';

const zlib = require('zlib');

if (process.argv.length != 5) {
    console.log('Usage: ');
    console.log('  node mysqldumpfind <file> <table> <regexp>');
    process.exit(1);
}

// parameters
var file = process.argv[2];
var table = process.argv[3];
var regexp = new RegExp(process.argv[4]);

// reader
var fs = require('fs');
const readline = require('readline');

var inputstream = fs.createReadStream(file);
if (file.match(/\.gz$/)) inputstream = inputstream.pipe(zlib.createGunzip());

const rl = readline.createInterface({
    input: inputstream,
    output: null,
});

// process file
var currenttable = null;
rl.on('line', function (line) {
    // if its an insert
    var m = line.match(/INSERT INTO `(\w+)`/);
    if (m) currenttable = m[1];

    if (table == currenttable) {
        var m = [...line.matchAll(/\(.*?\)/g)];
        m.forEach(function (x) {
            if (x[0].match(regexp)) console.log(x[0]);
        });
    }
});
