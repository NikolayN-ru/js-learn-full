<html>
  <body>
    <script>alert(document.body.lastChild.nodeType);</script>
  </body>
</html>;

// answer - 1

// Тег в комментарии
let body = document.body;
body.innerHTML = "<!--" + body.tagName + "-->";
alert(body.firstChild.data); // что выведет?
// -> answer BODY

//Где в DOM-иерархии "document"?
// Объектом какого класса является document?

alert(document); // [object HTMLDocument]
