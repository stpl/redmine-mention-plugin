$(function () {

  $('.controller-issues textarea.wiki-edit, .controller-wiki textarea.wiki-edit').mentionsInput({
    onDataRequest:function (mode, query, callback) {
      var data = [];
      $.ajax({
        url: '/mention/users/search',
        data: {'keyword': query},
        async: false,
        success: function(result) {
          data = result['result'];
        }
      });
      data = _.filter(data, function(item) { return item.username.toLowerCase().indexOf(query.toLowerCase()) > -1 });

      callback.call(this, data);
    },
    templates     : {
      autocompleteList           : _.template('<div class="mentions-autocomplete-list"></div>'),
      autocompleteListItem       : _.template('<li data-ref-id="<%= id %>" data-display="<%= display %>"><%= content %></li>'),
      autocompleteListItemAvatar : _.template('<img src="<%= avatar %>" />'),
      autocompleteListItemIcon   : _.template('<div class="icon <%= icon %>"></div>'),
      mentionsOverlay            : _.template('<div class="mentions"><div></div></div>'),
      mentionItemSyntax          : _.template('@[<%= value %>](<%= id %>)'),
      mentionItemHighlight       : _.template('<strong><span><%= value %></span></strong>')
    }
  });
});