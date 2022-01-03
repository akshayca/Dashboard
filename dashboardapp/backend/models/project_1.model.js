const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const project_1_Schema = new Schema({
    versionNumber: {type: String},
    testCategory: {type: String},
    buildNumber: {type: Number},
    total:  {type: Number},   
    executed:  {type: Number},
    passed:  {type: Number},  
    failed:  {type: Number},  
    error:  {type: Number},    
});

const project_1 = mongoose.model('project_1', project_1_Schema);

module.exports = project_1;