module.exports = { //แยกฟังก์ชัน
    //get all user
    index(req, res) {
        res.send('ดูข้อมูลผู้ใช้งานทั้งหมด')
    },

    //creat user
    create(req, res) {
        res.send('สร้างผู้ใช้งาน : ' + JSON.stringify(req.body))
    },

    //edit user
    put(req, res) {
        res.send('แก้ไขผู้ใช้งาน : ' + req.params.userId + ' : ' + JSON.stringify(req.body.name))
    },

    //delete user
    delete(req, res) {
        res.send('ลบผู้ใช้งาน : ' + req.params.userId + ' : ' + JSON.stringify(req.body.name))
    },

    //show user by id
    show(req, res) {
        res.send('ดูข้อมูลผู้ใช้งาน' + req.params.userId + ' : ' + JSON.stringify(req.body.name))
    }
}