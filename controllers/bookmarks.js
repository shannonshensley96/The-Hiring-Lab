const { v4: uuidv4 } = require('uuid');


module.exports = {
    create
}

async function create(req,res){
   console.log( req.body,'this is create method', req.user)
   try{
    const bookMark = await BookMark.create({
        redirect_url: req.body.redirect_url,title: req.body.title, label: req.body.label,location: req.body.location,description: req.body.description });
       
        console.log(bookMark)
        res.status(201).json({bookMark: bookMark})

   }catch(err){
    console.log(err)
   res.json({data: err})
   }

}




