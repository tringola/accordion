/*------------------------------------------------------------------------------

* Accordion
* Simple Accordion done in Vanilla JS
* GitHub    : https://github.com/kolappannathan/accordion
* Based on  : https://github.com/pinceladasdaweb/accordion
* Version   : v2.1.1 (5 May, 2018)
* License   : MIT license (http://www.opensource.org/licenses/mit-license.php)

------------------------------------------------------------------------------*/

window.onload = function () {
    let acc = document.getElementsByClassName("js-accordion");

    for(let i = 0; i < acc.length; i++) {
      let titles = acc[i].getElementsByTagName("h2");

      for (let j = 0; j < titles.length; j++) {
          let title = titles[j];

          title.setAttribute("class", "toggle");
          title.nextElementSibling.setAttribute("class", "closed");

          title.onclick = function () {
              let cur = this;

              if (cur.getAttribute("class") == "toggle") {
                cur.setAttribute("class", "toggle-active");
                cur.nextElementSibling.setAttribute("class", "");
              }
              else {
                cur.setAttribute("class", "toggle");
                cur.nextElementSibling.setAttribute("class", "closed");
              }
          }
      }

    }
}
