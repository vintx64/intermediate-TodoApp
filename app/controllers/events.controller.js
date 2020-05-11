//Require:
const Event = require('../models/event')
//Functions
//=============================================
//show all todos
const showData  = (req,res)=>{
        Event.find({} , (err , events)=>{
            if (err){
                res.status(404);
                res.send('Page Not Found :/ ')
            }
            res.render('pages/events', {events : events});
        });
    }
//show Single todo
 const showSingleData = (req , res)=>{
    Event.findOne({slug : req.params.slug} , (err , event)=>{
        if(err){
            res.status(404);
            res.send('Error');
        }
        res.render('pages/singleEvent.ejs' , {event : event});
    });
    
}
//insert Page
const showInserted = (req , res)=>{
        res.render('pages/insert');
    }
// insert Data
const insertt = (req , res)=>{
        const event = new Event({
            todoName : req.body.todoName , 
            todoDescription : req.body.todoDescription
        });
        event.save((err)=>{
            if (err) throw err;
            res.redirect(`/events/${event.slug}`);
        });
    }
//DeleteData
const remove =(req , res)=>{
    Event.deleteOne({slug : req.params.slug} , (err)=>{
        if (err) throw err;
        res.redirect('/events');
    });
}
//show Edit zone
const editArea = (req , res)=>{
    Event.findOne({slug : req.params.slug} , (err , event)=>{
        res.render('pages/update' , {event : event});
    });
}
//Edit
const Edit = (req , res)=>{
    Event.findOne({slug : req.params.slug} , (err , event)=>{
        event.todoName = req.body.todoName;
        event.todoDescription = req.body.todoDescription;
        event.save(err=>{
            if (err) throw err;
            res.redirect('/events');
        });
    });
}
//========================================================================
module.exports = {  
    showData : showData,
    showSingleData : showSingleData,
    showInserted : showInserted,
    insertt : insertt,
    editArea : editArea,
    Edit : Edit,
    remove : remove
};