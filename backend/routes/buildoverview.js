const router = require('express').Router();
let Build = require('../models/buildoverview.model');

router.route('/').get((req, res) => {
    Build.find()
    .then(builds => res.json(builds))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const productVersion= req.body.PRODUCT_VERSION;
    const dbSchemaName= req.body.DATABASE_SCHEMA_NAME;
    const buildNumber= req.body.BUILD_NUMBER;
    const buildId= req.body.BUILD_ID;
    const buildDate= req.body.BUILD_DATE;
    const buildStatus= req.body.BUILD_STATUS;
    const installationStatus= req.body.INSTALLATION_STATUS;
    const executionStatus= req.body.EXECUTION_STATUS;
    const smokeStatus= req.body.SMOKE_STATUS;
  
    const newBuild = new Build({
        productVersion,
        dbSchemaName,
        buildNumber,
        buildId,
        buildDate,
        buildStatus,
        installationStatus,
        executionStatus,
        smokeStatus,
    });

    newBuild.save()
  .then(() => res.json('new Build added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Build.findById(req.params.id)
      .then(builds => res.json(builds))
      .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {
    Build.findByIdAndDelete(req.params.id)
      .then(() => res.json('Build deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Build.findById(req.params.id)
      .then(builds => {
        builds.productVersion= req.body.PRODUCT_VERSION;
        builds.dbSchemaName= req.body.DATABASE_SCHEMA_NAME;
        builds.buildNumber= req.body.BUILD_NUMBER;
        builds.buildId= req.body.BUILD_ID;
        builds.buildDate= req.body.BUILD_DATE;
        builds.buildStatus= req.body.BUILD_STATUS;
        builds.installationStatus= req.body.INSTALLATION_STATUS;
        builds.executionStatus= req.body.EXECUTION_STATUS;
        builds.smokeStatus= req.body.SMOKE_STATUS;
  
        builds.save()
          .then(() => res.json('Build updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
module.exports = router;