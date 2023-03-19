const {Item} = require('../../models');

exports.AddItem = async (req, res) => {
    
    try {
        const body = req.body;
        const newItem = await Item.create({
            ...body,
            barang : req.file.filename
        })
        if (!newItem) {
            return res.status(400).send({
                status : "Eror",
                error : {
                    message : "Upload failed"
                }
            })
        }
res.status(200).send({
    status: "success",
    
})
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message:"Server Error"
        });
    }
}