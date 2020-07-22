import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc =  new GoogleSpreadsheet('13DjfUB2jSoy7wl3houUCi7cVBRVLyQtAb2_HJ4-eruQ')

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A2:B2')

        const mostrarPromocaoCell = sheetConfig.getCell(1, 0)
        const textoCell = sheetConfig.getCell(1, 1)

        let Cupom = ''
        let Promo = ''
        if(mostrarPromocaoCell.value === 'VERDADEIRO'){
            Cupom = 'temporario'
            Promo = textoCell.value
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whattsapp: data.Whattsapp,
            Cupom,
            Promo
        })
        res.end(req.body)      
    }catch (err) {
        console.log(err)
        res.end('error')
    }
}