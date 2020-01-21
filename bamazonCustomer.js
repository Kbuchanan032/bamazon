var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Kbuchanan32",
  database: "bamazon_db"
});

connection.connect();

var display = function() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("----------------------------");
    console.log("    Welcome to Bamazon       ");
    console.log("----------------------------");
    console.log("");
    console.log("Find your product below");
    console.log("");

    var table = new Table({
      head: ["Product Id", "Product Description", "Cost"],
      colWidth: [12, 50, 8],
      colAligns: ["center", "left", "right"],
      style: {
        head: ["aqua"],
        compact: true
      }
    });

    for (var i = 0; i < res.length; i++) {
      table.push([res[i].id, res[i].product_name, res[i].price]);
    }
    console.log(table.toString());
    console.log("");
    shopping();
  });
};

var shopping = function() {
  inquirer
    .prompt({
      name: "productToBuy",
      type: "input",
      message: "Enter the id of the product you would to like purchase."
    })
    .then(function(answer1) {
      var selection = answer1.productToBuy;
      connection.query("SELECT * FROM products WHERE Id=?", selection, function(
        err,
        res
      ) {
        if (err) throw err;
        if (res.length === 0) {
          console.log(
            "Invalid product ID. Please enter an Id from the list above."
          );
          shopping();
        } else {
          inquirer
            .prompt({
              name: "quantity",
              type: "input",
              message: "How many would you like to purchase?"
            })
            .then(function(answer2) {
              var quantity = answer2.quantity;
              if (quantity > res[0].stock_quantity) {
                console.log(
                  "Sorry, there are only " +
                    res[0].stock_quantity +
                    " of that item left in stock"
                );
                shopping();
              } else {
                console.log("");
                console.log(res[0].product_name + " purchased");
                console.log(quantity + " qty @ $" + res[0].price);

                var newQuantity = res[0].stock_quantity - quantity;
                connection.query(
                  "UPDATE products SET stock_quantity = " +
                    newQuantity +
                    " WHERE id = " +
                    res[0].id,

                  function(err, resUpdate) {
                    if (err) throw err;
                    console.log("");
                    console.log("Your order has been placed!");
                    console.log("thanks for shopping with us!");
                    console.log("");
                    connection.end();
                  }
                );
              }
            });
        }
      });
    });
};

display();
// function runSearch() {
//   inquirer
//     .prompt({
//       name: "action",
//       type: "rawlist",
//       message: "Choose ID of item you would like to purchase.",
//       choices: [190, 191, 192, 193, 194, 195, 196, 197, 198, 199]
//     })
//     .then(function(answer) {
//       switch (answer.action) {
//         case "find item ID":
//           itemSearch();
//           break;
//       }
//     });
// }

// function runSearch() {
//   inquirer.prompt({
//     name: "action",
//     type: "number",
//     message: "How many units would you like to purchase?"
//   }).then(function(answer){
//       switch (answer.action) {
//           case ""
//       }
//   })
// }
