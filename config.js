//Sc by Xyro base Clara MD
//Di Tulis Ulang VynaChan
//Buat lu semua yang jual sc ini gua ga bakal share lagi!

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285786539008', 'Fahrul', true] //Ganti aja
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285786539008' //Ganti
global.packname = '© Sticker by Faharul'
global.author = 'ZERO-MD'
global.namebot = 'Kaguya - MD'
global.wm = '© Fahrul'
global.stickpack = '© Sticker by Fahrul'
global.stickauth = 'ZERO-MD'
// Link Sosmed
global.sig = 'https://instagram.com/fahrul_mt?igshid=MzNlNGNkZWQ4Mg=='
global.sgh = 'https://github.com/Rakrohaku9534'
global.sgc = 'https://chat.whatsapp.com/HZ0XzL2hYl5EtKgz15Qdfv'
// Donasi
global.psaweria = '-'
global.ptrakterr = '-'
global.povo = '-'
// Info Wait
global.wait = '⏳ Proses...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'kZHaABfTe6'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "kZHaABfTe6",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})