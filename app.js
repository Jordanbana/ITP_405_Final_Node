var express = require('express')
var app = express()
var Comments = require('./models/comments')
var Videos = require('./models/videos')
var Users = require('./models/users')
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Get All Comments
app.get('/api/v1/comments', function(request,response){
    Comments.fetchAll().then(function(comments){
        response.json(comments);
    })
});

//Get One Specific Comment
app.get('/api/v1/comments/:id', function(request,response){
    Comments
      .where('id', request.params.id)
      .fetch({ require:true })
      .then(function(comment){
        response.json(comment);
    },function(){
        response.json({
          error: 'video cannot be found.'
        });
    });
});

//Post
app.post('/api/v1/comments', function(request,response){
    var comment = new Comments({
        video_id: request.body.video_id,
        user_comment: request.body.user_comment
    });

    comment.save().then(function(){
        response.json(comment);
    });
});



//Get All Videos
app.get('/api/v1/videos', function(request,response){
    Videos.fetchAll().then(function(videos){
        response.json(videos);
    })
});

//Get One Specific Video
app.get('/api/v1/videos/:id', function(request,response){
    Videos
      .where('id', request.params.id)
      .fetch({ require:true })
      .then(function(video){
        response.json(video);
    },function(){
        response.json({
          error: 'video cannot be found.'
        });
    });
});



//Get All Users
app.get('/api/v1/users', function(request,response){
    Users.fetchAll().then(function(users){
        response.json(users);
    })
});

//Get One Specific User
app.get('/api/v1/users/:id', function(request,response){
    Users
      .where('id', request.params.id)
      .fetch({ require:true })
      .then(function(users){
        response.json(users);
    },function(){
        response.json({
          error: 'video cannot be found.'
        });
    });
});




app.listen(process.env.PORT || 3000);
