// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Lists.find().count() === 0) {
    var data = [
      {name: "软件工程",
       items: [
         "阅读材料：浪潮之巅",
         "阅读材料：人月神话",
         "第三周课件",
         "第二周课件",
         "第一周课件",
         "教学计划"
       ]
      },
      {name: "软件工程实习",
       items: [
         "教学计划",
         "第一周课件"
         ]
      },
      {name: "数学建模",
       items: [
         "第一周作业",
         "第一周课件",
         "教学计划"
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
