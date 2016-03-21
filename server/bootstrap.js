// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Lists.find().count() === 0) {
    var data = [
      {name: "软件工程",
       items: ["这是一个课件",
         "这是第二个课件",
         "这又是一个课件",
         "这还是一个课件",
         "这里有很多课件",
         "这是个通知",
         "这是个 Deadline"
       ]
      },
      {name: "软件工程实习",
       items: ["假设我又列出来了很多课件"
         ]
      },
      {name: "数学建模",
       items: ["课件",
         "作业"
       ]
      }
    ];

    var timestamp = (new Date()).getTime();
    _.each(data, function(list) {
      var list_id = Lists.insert({name: list.name,
        incompleteCount: list.items.length});

      _.each(list.items, function(text) {
        Todos.insert({listId: list_id,
                      text: text,
                      createdAt: new Date(timestamp)});
        timestamp += 1; // ensure unique timestamp.
      });
    });
  }
});
