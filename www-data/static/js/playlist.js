var options = {
  valueNames: [ 'title', 'link', 'artists', 'tags' ],
  item: '<li><h3 class="title"></h3><div class="artists"></div><a class="link"></a><p class="tags"></p></li>'
};

var values = [{
    title: 'Fly me to the moon',
    artists: 'Frank Sinatra',
    link: 'http://www.youtube.com/watch?v=mhujM7T1_fQ',
    tags: 'sinatra'
  },
  {
    title: 'I\'ve got you under my skin',
    artists: 'Frank Sinatra',
    link: 'http://www.youtube.com/watch?v=g3GYUvsFPpM',
    tags: 'sinatra'
  }];

var userList = new List('users', options, values);

userList.add({
    title: 'I have got you under my skin',
    artists: 'Frank Sinatra',
    link: 'http://www.youtube.com/watch?v=g3GYUvsFPpM',
    tags: 'sinatra'
});
