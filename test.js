'use strict'

var exec = require('child_process').exec
import test from 'ava'


test.beforeEach.cb((t) => {
  setTimeout(() => {
    t.end();
  }, 2000);
});


test('my test', t => {
  t.is(3, 3)
})

test.cb('my exec.js', t => {
    exec('node exec.js', function (error, stdout, stderr) {
        t.ifError(error)
        t.regex(stdout, /i5ting-hello-node/)
        t.fail()
        t.end()
    })
})

