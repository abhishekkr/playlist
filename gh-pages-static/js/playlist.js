/*
author: AbhishekKr
occasional javascript artisen, comments/suggestions encouraged
*/

function openInTube(self){
  window.open(self.innerHTML);
  return false;
}

var options = {
  valueNames: [ 'title', 'link', 'artists', 'tags' ],
  item: '<li><h3 class="title"></h3><div class="artists"></div><a class="link" href="javascript:void(0)" onclick="openInTube(this);" onkeypress="openInTube(this);"></a><div class="embed"></div><p class="tags"></p></li>',
  page: 18,
  plugins: [ ListPagination({}) ]
};

var values = [{
    title: 'I\'ve Got The World On A String',
    artists: 'Frank Sinatra',
    link: 'https://www.youtube.com/watch?v=1cPG1t52GgI',
    embed: '<iframe class="tubeFrame" src="//www.youtube.com/embed/1cPG1t52GgI?feature=player_detailpage" frameborder="0" allowfullscreen></iframe>',
    tags: 'english, frank, sinatra'
  }
  ];


var userList = new List('playlist', options, values);

/* add all elements from loaded list */
function update_list(this_item){
  userList.add({
    title: this_item.title,
    artists: this_item.artists,
    link: this_item.link,
    embed: '<iframe class="tubeFrame" src="' + this_item.embed + '" frameborder="0" allowfullscreen></iframe>',
    tags: this_item.tags
  });
}

youtube_json =  "/playlist/gh-pages-static/songs/youtube.json"
$.getJSON( youtube_json, {}) .done(function( json ) {
      $(jQuery.parseJSON(JSON.stringify(json))).each(function() {
          update_list(this)
      });
  })
  .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
});

/* tooltip to all titles in list */
$('*').filter(function() {
   return $(this).css('text-overflow') == 'ellipsis';
}).each(function() {
   if (this.offsetWidth < this.scrollWidth && !$(this).attr('title')) {
      $(this).attr('title', $(this).text());
   }
});
