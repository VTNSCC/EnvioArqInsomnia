const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    
    dest: path.resolve(__dirname, '..', '..', 'src', 'tmp', 'uploads'),
    //dest == fallback se não houver nada definido no destination usa esse caminho.
    storage: multer.diskStorage({
        
        destination: (req, file, cb) => {
            //Destino do arquivo de upload
            cb(null, path.resolve(__dirname, '..', '..', 'src', 'tmp','uploads'));
        },
        filename: (req, file, cb) => {
            //Evitar arquivos com mesmo nome 
            crypto.randomBytes(16, (err,hash) => {
                if(err) cb(err);
                const fileName = `${hash.toString("hex")}-${file.originalname}`;

                cb(null, fileName);
            });
        },

    }),
    limits: {
    //Tamanho do arquivo 5mb
    fileSize: 5 * 1024 * 1024
    },

    fileFilter: (req, file, cb) => {
    //Define as extesões permitidas para upload na constante.
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
            'application/pdf'
        ];
    //Verifica se o arquivo é compatível com alguma das extensões da constante.
        if(allowedMimes.includes(file.mimetype)){
            cb(null, true)
        } else {
            cb(new Error('Invalid file type.'));
        }

    },

};