import multer from "multer";
import path from "path";
//TODO: cambiar a uuid? 
//const letters: string[] = ["A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f", "1", "2", "4", "8", "16", "Z", "z", "Y", "y"]
const letter: string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopkrstuvwxyz0123456789$#'
const randomName = () => {
    let name: string = ""
    for (let i: number = 0; i < 11; i++) {
        name += letter[Math.floor(Math.random() * (letter.length - 1)) + 1];
    }
    return name
}

const storage = multer.diskStorage({
    destination: path.join(__dirname, (`../../statics/img/`)), 
    filename: (req, file, cb) => {
        
        cb(null,`${randomName() + path.extname(file.originalname)}`)
    }
    
});
  

const uploadStorage = multer({storage: storage})


export default uploadStorage;