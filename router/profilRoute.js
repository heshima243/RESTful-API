const express = require("express")
const profilController = require('../controller/profilController')
const rateLimit = require("express-rate-limit");


const router = express.Router()


const profilLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // allow max 50 requests per IP
  message: {
    status: "error",
    message: "Too many requests. Please try again later.",
  },
});
router.get('/me',profilController.getProfil)

module.exports = router





