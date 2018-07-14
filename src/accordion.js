/*------------------------------------------------------------------------------

* Accordion
* Simple Accordion done in Vanilla JS
* GitHub    : https://github.com/kolappannathan/accordion
* Based on  : https://github.com/pinceladasdaweb/accordion
* Website   : https://kolappannathan.github.io/projects/accordion/
* Demo      : https://kolappannathan.github.io/projects/accordion/demo.html
* Version   : v3.0.1 (2 Jul, 2018)
* License   : MIT license (http://www.opensource.org/licenses/mit-license.php)

------------------------------------------------------------------------------*/

(function () {
  let acc = document.getElementsByClassName("acc-section");
  var items = document.getElementsByClassName("acc-item");     

    for (var i = 0; i < items.length; i++) {

      var item = items[i];
      item.classList.add("toggle");
      item.nextElementSibling.classList.add("acc-content");

       item.onclick = function () {
        var cur = this;
        if (cur.classList.contains("toggle")) {
          cur.classList.remove("toggle");          
          cur.nextElementSibling.style.display = "block";
        }
        else {
          cur.classList.add("toggle");          
          cur.nextElementSibling.style.display = "none";
        }
      }
    }
  
}());
