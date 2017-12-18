import articleModel from './articleModel'
let dbFn = {
    add: function(instance) {
        return articleModel.create(instance)
    },
    get: function(id) {
        //id==0, get lists
        if (id==0) {
            return articleModel.find({}).lean().exec()
        }else{
            return articleModel.findOne({ id: id }).lean().exec()
        }
        
    },
    del: function(id) {
        if (id) {
            return articleModel.remove({ id: id })
        }else{
            return articleModel.remove({},(err)=>{
                throw new Error(err);
            })
        }
    },
    edit: function(data) {
        return articleModel.findOneAndUpdate({ id: data.id }, {
            $set: {
                content: data.content
            }
        }, {}, function() {
            console.log('update done')
        })
    },
    // automatically add or edit
    update: function(data) {
        let userId = data.id;
        articleModel.count({ id: userId }, function(err, count) {
            if (err) {
                throw new Error(err)
            }
            if (count > 0) {
                articleModel.findOneAndUpdate({ id: userId }, {
                    $set: {
                        content: data.content
                    }
                }, {}, function() {
                    console.log('update done')
                })
            } else {
                articleModel.create(data)
            }
        })
    }
}
export default dbFn
