import mongoose from 'mongoose';
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/node-scaffold');

export default mongoose;
