
# eCart CLI
### CLI Shopping Cart Application

Design a CLI (Command Line Interface - which a user could run the program in a terminal) Shopping Application which will allow users to add products to shopping a cart and review the total price once the shopping is done.

Once the app is started, the CLI app should ask for the products through “Command Prompt” user wanted to add to shopping cart. Each product will be separated by “New Line/Enter mark”. Product count could be mentioned with space.


**Start eCart:**
```
$ node ecart.js
```

Then enter Product Name and Quantity `<ProductName> <Quantity>` in each line. Press `Ctrl+D` if you are done with shopping.

```
$ Apple 2
$ Toy car 1
$ Imported Wine 1
$ Banana 6
<Ctrl+D>
```

Once the products are selected, need to display the following in CLI:

```
Name: Apple
Quantity: 2
Price: Rs 20
Tax: Rs 2
Cost: Rs 22.00

Name: Imported Wine
Quantity: 1
Price: Rs 2000
Tax: Rs 600
Import Duty: Rs 240
Cost: Rs 2840.00

Total Discount: --
Total: Rs 2862.00
Cess: Rs 24.08
Grand Total: Rs 2886.08
```

### Display the following Total values in CLI:

- Total Amount for all selected Products
- Discount
- Cess
- Total including Cess

**Discount Calculation:**
- If the Total price (not including Taxes) is above 5000 then discount is 5% on the Total price

**Tax Calucation:**
- Tax for each Product will vary based on Product Category. For e.g., Tax will be 5% for Fruits, and 30% for Liquor.
- Imported product will have an additional Import Duty of 12%.

**Cess Calculation:**
Cess which is 4% will be calculated for Tax amount.

**Technical Requirements:**
- Install node.js
