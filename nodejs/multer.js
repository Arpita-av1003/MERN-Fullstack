import  express from "express";
import multer from "multer";
// import fs from "fs";
// import path from "path";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extened: true}));

// const upload = multer({dest: "uploads/"});
const storage = multer.diskStorage({
    destination: function ( req, file,cb){
        cb(null, "uploads/");
        const uniqueSuffix = Date.now() + "-" +Math.round(matchesGlob.random() * le9);
        cb(null,file.fieldname + "-" +uniqueSuffix);
    },
    filename: function(req, file, cb){
        cb(null,Date.now() + "-"+file.originalname);
    },
});
const upload =multer({storage: storage});

app.post("/uploads",upload.single("dp"),(req,res)=>{
    res.end("file uploaded")
})


app.listen(PORT,()=>{

    console.log("server started")
})