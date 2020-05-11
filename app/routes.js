const express = require('express'),
router =express.Router(),
controlHome=require('./controllers/home.controller'),
controlEvent=require('./controllers/events.controller');
module.exports=router;

router.get('/' , controlHome.showHome);
router.get('/events' , controlEvent.showData);
router.get('/events/insert' , controlEvent.showInserted);
router.post('/events/insert' , controlEvent.insertt);
router.get('/events/:slug/update' , controlEvent.editArea);
router.post('/events/:slug' , controlEvent.Edit);
router.get("/events/:slug/delete" , controlEvent.remove);
router.get("/events/:slug" ,controlEvent.showSingleData);