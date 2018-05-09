/*------------------------------------------------------------------------------

* Accordion
* Simple Accordion done in Vanilla JS
* GitHub    : https://github.com/kolappannathan/accordion
* Based on  : https://github.com/pinceladasdaweb/accordion
* Version   : v2.1.1 (5 May, 2018)
* License   : MIT license (http://www.opensource.org/licenses/mit-license.php)

------------------------------------------------------------------------------*/

window.onload = function () {
  let acc = document.getElementsByClassName("acc-section");

  for(let i = 0; i < acc.length; i++) {
    let titles = acc[i].getElementsByClassName("acc-title");

    for (let j = 0; j < titles.length; j++) {

      let title = titles[j];
      title.classList.add("toggle");
      title.nextElementSibling.classList.add("acc-closed");

      title.onclick = function () {
        let cur = this;
        if (cur.classList.contains("toggle")) {
          cur.classList.remove("toggle");
          cur.classList.add("toggle-active");
          cur.nextElementSibling.classList.remove("acc-closed");
        }
        else {
          cur.classList.add("toggle");
          cur.classList.remove("toggle-active");
          cur.nextElementSibling.classList.add("acc-closed");
        }
      }
    }
  }
}
