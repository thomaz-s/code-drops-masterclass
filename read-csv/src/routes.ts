import {Router, Request, Response} from 'express';
import multer from 'multer';
import { Readable } from 'stream';
import readline from 'readline';

const multerConfig = multer();

const router = Router();

interface Product {
    code_bar: string;
    description: string;
    price: number;
    quantity: number;
}

router.post('/products', multerConfig.single('file'), async(request: Request, response: Response) => {
    if (!request.file) return response.send();
    
    const {file} = request;
    const {buffer} = file;

    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    const productsLine = readline.createInterface({
        input: readableFile
    });

    const products: Product[] = [];

    for await(let line of productsLine){
        const productLineSplit = line.split(',');
        
        products.push({
            code_bar: productLineSplit[0],
            description: productLineSplit[1],
            price: Number(productLineSplit[2]),
            quantity: Number(productLineSplit[3])
        })
    }

    return response.json(products);
});

export {router};