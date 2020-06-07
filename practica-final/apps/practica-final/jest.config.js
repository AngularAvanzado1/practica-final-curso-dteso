module.exports = {
  name: 'practica-final',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/practica-final',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
