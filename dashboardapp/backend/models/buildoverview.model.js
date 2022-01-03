const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var buildoverviewSchema = new Schema({
    productVersion: {type: String},
    dbSchemaName: {type: String},
    buildNumber: {type: Number},
    buildId: {type: Number},
    buildDate: {type: String},
    buildStatus: {type: Boolean},
    installationStatus: {type: Boolean},
    executionStatus: {type: Boolean},
    smokeStatus: {type: Boolean}
});

const Buildoverview = mongoose.model('Buildoverview', buildoverviewSchema);

module.exports = Buildoverview;