let assert = require('assert');
let execFile = require('child_process').execFile;

console.log('test');
describe('check mysqldumpfind', () => {
    it('find a user where id = 55200', (done) => {
        execFile('node', ['index.js', 'exemple.sql', 'user', '55200'], (err, stdout, stderr) => {
            console.log(err, stdout, stderr);
            assert.ifError(err);
            assert.equal(stderr, '');
            assert.equal(stdout.trim(), "(55200,'admin','rafi.piccolo@gmail.com','raphael','piccolo')");
            done();
        });
    });

    it('also from a gz file', (done) => {
        execFile('node', ['index.js', 'exemple.sql.gz', 'user', '55200'], (err, stdout, stderr) => {
            console.log(err, stdout, stderr);
            assert.ifError(err);
            assert.equal(stderr, '');
            assert.equal(stdout.trim(), "(55200,'admin','rafi.piccolo@gmail.com','raphael','piccolo')");
            done();
        });
    });
});
