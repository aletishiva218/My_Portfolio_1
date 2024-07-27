import multer from "multer";
import path from "path";

const uploadCv = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            return cb(null,"uploads");
        },
        filename:(req,file,cb)=>{
            return cb(null,"Shiva_Aleti_Resume"+path.extname(file.originalname))
        }
    }),
    fileFilter:(req, file, cb) => {
        // Accept .jpg files only
        if (file.mimetype === 'application/pdf' || file.mimetype === 'application/pdf') {
          cb(null, true);
        } else {
          cb(new Error('Only .pdf files are allowed!'), false);
        }
      }
})

const uploadImage = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            return cb(null,"uploads");
        },
        filename:(req,file,cb)=>{
            return cb(null,"Shiva_Aleti"+path.extname(file.originalname))
        }
    }),
    fileFilter:(req, file, cb) => {
        // Accept .jpg files only
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
          cb(null, true);
        } else {
          cb(new Error('Only .jpg files are allowed!'), false);
        }
      }
})

export {uploadImage,uploadCv};
