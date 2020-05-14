var assert = require('assert');
var execFile = require('child_process').execFile;

console.log('test');
describe('check mysqldumpfind', function() {

    it('find a user where id = 55200', function(done) {
        execFile('node', ['index.js', 'exemple.sql', 'user', '55200'], function(err, stdout, stderr) {
            console.log(err, stdout, stderr);
            assert.ifError(err);
            assert.equal(stderr, '');
            assert.equal(stdout.trim(), "(55200,'admin','rafi.piccolo@gmail.com','raphael','piccolo')");
            done();
        });
    });

    it('also from a gz file', function(done) {
        execFile('node', ['index.js', 'exemple.sql.gz', 'user', '55200'], function(err, stdout, stderr) {
            console.log(err, stdout, stderr);
            assert.ifError(err);
            assert.equal(stderr, '');
            assert.equal(stdout.trim(), "(55200,'admin','rafi.piccolo@gmail.com','raphael','piccolo')");
            done();
        });
    });

});
