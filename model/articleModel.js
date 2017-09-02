import mongoose from './mongoose_config';
const { Schema } = mongoose;

const ArticleSchema = new Schema({
  id:String,
	content:String,
  createdAt : Date,
  updatedAt : Date
});

ArticleSchema.pre('save', function (next) {
  var now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) this.createdAt = now;
  next();
});

export default mongoose.model('articleModel', ArticleSchema);
