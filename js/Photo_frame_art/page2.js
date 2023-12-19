//  =+=-===-===-===-===-===-===-===-===-===-=+==+==+==+=
//  =+=     Loads Product data in ($key: $values)    =+=
//  =+=-===-===-===-===-===-===-===-===-===-===-=+====+=


// -------------------------------------------------------------------
// -  NOTE: only touch these Parameters if you don't want to change  -
// -        the code which generate items and gets data              -
// -------------------------------------------------------------------
// send json data here
const filePath = "../../json/Photo_frame_art.json";
// send image files from folder to here
const get_path = '../../products/Photo_frame_art/';

// array slice method to add products on page
const itemsStartValue = 10;
const itemsLastValue = 20;


// the code below generate HTML cards
// Assigns CSS class to it
// and fetch json data mostly text like heading and price
// the json data also contains the actual path to product image files
// 
// NOTE : changing the path where files are taken from is not recommended.
// 
// 
// this could also be extended well to adding:
// Author of product
// brand logo of company
// id of product
// and some more text
// 
// -------------------------------------------------------------------
fetch(filePath)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${filePath}: ${response.status} ${response.statusText}`
      );
    }
    return response.text();
  })
  .then((jsonObject) => {
    // creates DOM element
    function elem(elemTag) {
      return document.createElement(elemTag);
    }
    // used for assign values to DOM elements
    function generateCards(itemTitle, itemPrice, itemThumbnail) {
      // the path where json will get files from
 

      // category to store item cards in [ append]
      const productCategory = document.getElementById("product_datalist");

      // style classses
      const CSS_product = "product__main__list__category__item";
      const CSS_productGfx = "product__main__list__category__item__gfx";
      const CSS_productContent = "product__main__list__category__item__content";
      const CSS_controlBox =
        "product__main__list__category__item__content__section";
      const CSS_sectonContent =
        "product__main__list__category__item__content__section__control";
      const CSS_amountBox = "product__card__select";

      // creating product
      const product = elem("div");
      product.className = CSS_product;
      productCategory.append(product);

      // creating anchor link
      const anchorLink = elem("a");
      product.append(anchorLink);

      // creating product box
      const pImage = elem("div");
      pImage.className = CSS_productGfx;
      pImage.style.backgroundImage = "url('" + get_path + itemThumbnail + "')";
      anchorLink.append(pImage);

      // creating content box
      const pContent = elem("div");
      pContent.className = CSS_productContent;
      product.append(pContent);

      // adds title
      const title = elem("h3");
      title.innerHTML = itemTitle;
      pContent.append(title);

      // creating selection box to select
      const pitemsAmountBox = elem("section");
      pitemsAmountBox.className = CSS_controlBox;
      pContent.append(pitemsAmountBox);

      // creating section to store content
      const sectionContent = elem("section");
      sectionContent.className = CSS_sectonContent;
      pitemsAmountBox.append(sectionContent);

      // creating h5 heading as product name
      const text_h5 = document.createElement("h5");
      sectionContent.append(text_h5);
      text_h5.innerHTML = itemPrice;

      const span = document.createElement("span");
      span.innerHTML = "RS";
      text_h5.append(span);

      // creating product count
      const productCount = document.createElement("select");
      productCount.className = CSS_amountBox;
      sectionContent.append(productCount);

      // creating product numb box;

      const box1 = elem("option");
      const box2 = elem("option");
      const box3 = elem("option");
      const box4 = elem("option");
      const box5 = elem("option");
      const box6 = elem("option");
      const box7 = elem("option");
      const box8 = elem("option");
      const box9 = elem("option");
      const box10 = elem("option");

      box1.innerHTML = 1;
      box2.innerHTML = 2;
      box3.innerHTML = 3;
      box4.innerHTML = 4;
      box5.innerHTML = 5;
      box6.innerHTML = 6;
      box7.innerHTML = 7;
      box8.innerHTML = 8;
      box9.innerHTML = 9;
      box10.innerHTML = 10;

      productCount.append(box1);
      productCount.append(box2);
      productCount.append(box3);
      productCount.append(box4);
      productCount.append(box5);
      productCount.append(box6);
      productCount.append(box7);
      productCount.append(box8);
      productCount.append(box9);
      productCount.append(box10);

      // creating product button;
      var btn = document.createElement("button");
      btn.className = CSS_product;
      btn.innerHTML = "BUY NOW";
      product.append(btn);
    }

    function initElement() {
      // getting jsonObject in your JSON data
      var parsedData = JSON.parse(jsonObject);

      // Limit the loop to process only the first 10 keys

     

      const keysToProcess = Object.keys(parsedData).slice(itemsStartValue, itemsLastValue);

      for (const key of keysToProcess) {
        if (Object.hasOwnProperty.call(parsedData, key)) {
          var makeElement = parsedData[key];
          generateCards(
            makeElement.title,
            makeElement.price,
            makeElement.thumbnail
          );
        }
      }
    }
    initElement();
  })

  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
