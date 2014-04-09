$(function () {

  $('textarea.wiki-edit').mentionsInput({
    onDataRequest:function (mode, query, callback) {
      var data = [];
      $.ajax({
        url: 'mention/users/search',
        data: {'keyword': $}
      }).done(function(data) {
        alert(data);
      });
      data = _.filter(data, function(item) { return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1 });

      callback.call(this, data);
    }
  });

  // $('.get-syntax-text').click(function() {
  //   $('textarea.mention').mentionsInput('val', function(text) {
  //     alert(text);
  //   });
  // });

  // $('.get-mentions').click(function() {
  //   $('textarea.mention').mentionsInput('getMentions', function(data) {
  //     alert(JSON.stringify(data));
  //   });
  // }) ;

});