import DataUriParser from "datauri/parser.js";
import path from 'path';

const getDataUri = (file) => {
    // if (!file || !file.originalname) 
    //     {
    //     throw new Error('No file uploaded or file format is incorrect');
        
    // }
//     const parser = new DataUriParser();
//     const extName = path.extname(file.originalname).toString();
//     return parser.format(extName, file.buffer);
// }

const parser = new DataUriParser();
const extName = path.extname(file.originalname).toString();
return parser.format(extName, file.buffer);
}

export default getDataUri;