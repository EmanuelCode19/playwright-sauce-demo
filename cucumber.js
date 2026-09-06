module.exports = {
  default: {
     requireModule: ['ts-node/register'],

    require: [
     'step-definitions/**/*.ts',
      'features/hooks/**/*.ts',
      'support/**/*.ts'
    ],
    format: [
      'progress',
      'json:reports/cucumber-report.json',
      'html:reports/cucumber-report.html'

    ],
    publishQuiet: true
  }
};