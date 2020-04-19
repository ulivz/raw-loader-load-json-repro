import foo from 'raw-loader!./foo.json' // don't work
// import foo from 'raw-loader!./foo.js' // work

export default {
  foo,
}
