function PizzaOder(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

const pizzaValue = {
    size: {
        small: 500,
        medium: 850,
        large: 1100,
    },

    crust: {
        crispy: 100,
        stuffed: 150,
        "gluten-free": 200
    },

    topping: {
        peperoni: 150,
        mushrooms: 200,
        onions: 100,
        bacon:200,
        extraCheese: 200,
    }  
}

PizzaOder.prototype.getPrice = function (e) {
    e.preventDefault();
    return pizzaValue.size[this.size] + pizzaValue.crust[this.crust] + pizzaValue.topping[this.topping];
    
}

const orderedPizza = []

$(document).ready(function() {
    $(".order-btn").click(function(event) {
        event.preventDefault();
      let size = $(".size").find("select[name=size]").val();
      let crust = $(".crust").find("select[name=crust]").val();
      let topping = $(".topping").find("select[name=topping]").val();
      let placedOrder = new PizzaOder(size,crust,topping);
      orderedPizza.push(placedOrder);
      console.log(orderedPizza)
    });

    var tableData = $.map(orderedPizza, (order, orderNum)=> {
        return "<td>" + orderNum + "</td>" + "<td>" + order.size +"</td>" + "<td>" +order.crust+ "</td>"+ "<td>"+order. topping+"</td>"
    })
    console.log(tableData)
    $(".order-btn").click(function(e){
        e.preventDefault();
        $(".my-orders").show();
        $("tbody tr").append(tableData);
    });
  });

  