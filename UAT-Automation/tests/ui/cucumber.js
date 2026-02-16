module.exports = {
  default: {
    paths: ['features'],
    require: ['step_definitions/*.js'],
    format: ['progress'],
    defaultTimeout: 30000,
  },
};