const router = require('express').Router();
let Project_1 = require('../models/project_1.model');

router.route('/').get((req, res) => {
    Project_1.find()
    .then(project_1 => res.json(project_1))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const versionNumber=  req.body.versionNumber;
    const testCategory=  req.body.testCategory;
    const buildNumber= req.body.buildNumber;
    const total=  req.body.total;   
    const executed=  req.body.executed;
    const passed=  req.body.passed;  
    const failed=  req.body.failed;  
    const error=  req.body.error;    

  
    const newProject_1 = new Project_1({
        versionNumber,
        testCategory,
        buildNumber,
        total,   
        executed,
        passed,  
        failed,  
        error,      
    });
  
    newProject_1.save()
      .then(() => res.json('Project_1 added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;