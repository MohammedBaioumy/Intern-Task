const express=require('express');
const router= express.Router();

const languageController=require('../controllers/LanguageController');

router.post('/detect',(req,res,next)=> languageController.detectSingle(req,res,next));
router.post('/detect/batch', (req, res, next) => languageController.detectBatch(req, res, next));
router.get('/languages', (req, res) => languageController.getSupportedLanguages(req, res));

module.exports = router;