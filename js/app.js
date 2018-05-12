var items = [
  { title: "Macbook Air", price: 788 },
  { title: "Macbook Pro", price: 999 },
  { title: "The new iPad", price: 399 },
  { title: "Magic Mouse", price: 50 },
  { title: "Cinema Display", price: 799 }
];

require(['require-config'], function() {
  // Configuration loaded now, safe to do other require calls
  // that depend on that config.
  require(['underscore', 'backbone', "app/views/cartcollectionview"],
    function (_, Backbone, CartCollectionView) {
        new CartCollectionView(items);
    }
  );
});




