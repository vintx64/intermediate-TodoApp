const mongoose =require('mongoose'),
Schema = mongoose.Schema;

const eventSchema = new Schema({
    todoName : {
        type : String ,
         required : true ,
          unique :true ,
          maxlength : 50
                },
    slug :{
            type : String ,
            unique : true
            },
    todoDescription :{
        type : String ,
        required:true
            }
});
eventSchema.pre('save' , function(next){
    this.slug = slugify(this.todoName);
    next();
});
const eventModel = mongoose.model('Event' , eventSchema);
module.exports = eventModel;

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
