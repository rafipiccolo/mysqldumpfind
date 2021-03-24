#!/usr/bin/env node

const zlib = require('zlib');

if (process.argv.length != 5) {
    console.log('Usage: ');
    console.log('  node mysqldumpfind <file> <table> <regexp>');
    process.exit(1);
}

// parameters
let file = process.argv[2];
let table = process.argv[3];
let regexp = new RegExp(process.argv[4]);

// reader
let fs = require('fs');
const readline = require('readline');

let inputstream = fs.createReadStream(file);
if (file.match(/\.gz$/)) inputstream = inputstream.pipe(zlib.createGunzip());

const rl = readline.createInterface({
    input: inputstream,
    output: null,
});

// process file
let currenttable = null;
rl.on('line', (line) => {
    // if its an insert
    let m = line.match(/INSERT INTO `(\w+)`/);
    if (m) currenttable = m[1];

    if (table == currenttable) {
        let m = [...line.matchAll(/\(.*?\)/g)];
        m.forEach((x) => {
            if (x[0].match(regexp)) console.log(x[0]);
        });
    }
});
