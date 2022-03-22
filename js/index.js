function PizzaOder(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

const orderedPizza = []

$(document).ready(function() {
    $(".order-btn").click(function(event) {
      let size = $(".size").find("select[name=size]").val();
      let crust = $(".crust").find("select[name=crust]").val();
      let topping = $(".toppings").find("select[name=toppings]").val();
      let placedOrder = new PizzaOder(size,crust,topping)
      console.log(placedOrder)
      event.preventDefault();
    });
  });