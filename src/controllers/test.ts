import {Request,Response} from 'express'
const fs= require('fs')
import {spawn,execSync} from 'child_process'
class Test {
    testGet=(req:Request,res:Response)=>{
        res.json('hehehhehheehhehehehheheheh')
    }
    testPost=(req:Request,res:Response)=>{
        const code:string=req.body.code;
        const args:string=req.body.args;
        console.log(args)
        let output:string=''
        fs.writeFile('temp.py',code,err=>{
            if(err){
                console.log(err)
            }
        })
        const process=spawn('python3',['./temp.py'])
        process.stdout.on('data',(data)=>{res.send(data); process.kill()})
        process.stderr.on('data',(data)=>{res.send(data); process.kill()})
        // process.stdin.write(args)
    }
}
export default Test