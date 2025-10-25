const languageService = require('../services/languageDetectionService');

class LanguageController {
  async detectSingle(req, res, next) {
    try {
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({
          error: 'Text is required',
          message: 'Please provide text to detect language'
        });
      }

      const result = languageService.detect(text);

      return res.status(200).json({
        language: result.language,
        confidence: result.confidence,
        detectedText: text
      });
    } catch (err) {
      next(err);
    }
  }

  async detectBatch(req, res, next) { 
    try {
      const { texts } = req.body;
      if (!Array.isArray(texts)) {
        return res.status(400).json({
          error: 'texts must be an array',
          message: 'Please provide an array of texts'
        });
      }

      const results = languageService.detectBatch(texts);
      return res.status(200).json({ results });
    } catch (err) {
      next(err);
    }
  }

  async healthCheck(req, res) {
    return res.status(200).json({
      status: 'ok',
      uptime: process.uptime(),
      version: '1.0.0',
      timestamp: new Date().toISOString()
    });
  }

  getSupportedLanguages(req, res) {
    const supportedLanguages = languageService.getSupportedLanguages();
    return res.status(200).json(supportedLanguages);
  }
}

module.exports = new LanguageController();