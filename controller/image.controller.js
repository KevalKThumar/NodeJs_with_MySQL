const uploadImage = (req,res)=>{
    if (req.file.filename) {
        res.status(200).json({
            message: "image uploaded successfully",
            image: req.file.filename
        })
    } else {
        res.status(400).json({
            message: "image not uploaded"
        })
    }
}



module.exports = {uploadImage}