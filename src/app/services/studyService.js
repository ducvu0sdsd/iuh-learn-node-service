
const ThongTinHocPhan = require('../models/thongTinHocPhan')

class studyService {

    createThongTinHocPhan = async (thongtin) => {
        return await ThongTinHocPhan.create(thongtin)
    }

    gelAllThongTinHocPhan = async () => {
        return await ThongTinHocPhan.find()
    }

    deleteThongTinHocPhan = async (id) => {
        return await ThongTinHocPhan.findByIdAndDelete(id)
    }

}

module.exports = new studyService