import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({

 name: {
 type: String,
 trim: true,
 required: 'Name is required'
 },

 description: {
  type: String,
  trim: true
},

 price: {
type: Number,
default: 0
   },

 published: {
type: Boolean,
default: false
},
category: {
type: String,
required: 'Category is required',
default: "teens"
}
});

/*UserSchema.virtual('password')
 .set(function(password) {
 this._password = password;
//this.salt = this.makeSalt();
this.hashed_password = password;
})
.get(function() {
return this._password;
 });
UserSchema.path('hashed_password').validate(function(v) {
 if (this._password && this._password.length < 6) {
 this.invalidate('password', 'Password must be at least 6 characters.');
}
 if (this.isNew && !this._password) {
this.invalidate('password', 'Password is required');
 }
}, null);*/

//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('Product', ProductSchema);

