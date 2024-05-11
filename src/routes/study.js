const studyController = require('../app/controllers/studyController')

const router = require('express').Router()

router.post("/create-thong-tin-hoc-phan", studyController.createThongTinHocPhan)
router.get("/get-all-thong-tin-hoc-phan", studyController.getAllThongTinHocPhan)
router.delete("/delete-thong-tin-hoc-phan/:id", studyController.deleteThongTinHocPhan)

module.exports = router