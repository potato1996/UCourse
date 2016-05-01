//created by zhaozewei
var INFO_KEY = "Info";

Template.courseInfo.helpers({
  GetInfo: function() {
    return Session.get(INFO_KEY);
  }
});

Template.courseInfo.events({
  'click .js-close-info': function() {
    history.back();
  }
});

/*
      <h3 class="infoHead"> 软件工程简介 </h3>
      <p class="infoParagraph"> 软件工程（英语：Software Engineering[1]）1968年秋季，NATO（北約）的科技委員會召集了近50名一流的編程人員、計算機科學家和工業界巨頭，討論和制定擺脫“軟體危機”的對策。在那次會議上第一次提出了軟體工程（software engineering）這個概念，研究和应用如何以系统性的、规范化的、可定量的过程化方法去开发和维护软件，以及如何把经过时间考验而证明正确的管理技术和当前能够得到的最好的技术方法结合起来的学科。它涉及到程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。</p>
      <p class="infoParagraph"> 在现代社会中，软件应用于多个方面。典型的软件比如有电子邮件、嵌入式系统、人机界面、办公套件、操作系统、编译器、数据库、游戏等。同时，各个行业几乎都有计算机软件的应用，比如工业、农业、银行、航空、政府部门等。这些应用促进了经济和社会的发展，提高人们的工作效率，同时提升了生活质量。 </p>
      <p class="infoParagraph"> 软件工程师是对应用软件创造软件的人们的统称，软件工程师按照所处的领域不同可以分为系统分析师、系统架构师、软件设计师、程序员、测试工程师、界面与交互设计师等等。人们也常常用程序员来泛指各种软件工程师。 </p>
*/
