const express = require ('express')

const app = express()

const port = 8080 

const Middleware=(req,res,next)=>{
const date=new Date()
const dayOfWeek = date.getDate()
const hourOfDay= date.getHours()
const isWorkingHours = dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17;
  if (!isWorkingHours) {
    res.status(403).send('Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17).');
    return;
  }
  next();
}

app.use(Middleware)

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/Public/Home.html")
})
app.get('/Contact',(req,res)=>{
    res.sendFile(__dirname+'/Public/ContactUs.html')
})
app.get('/OurServices',(req,res)=>{
    res.sendFile(__dirname+'/Public/OurServices.html')
})


app.listen(port,console.log(`server is running on ${port}`))