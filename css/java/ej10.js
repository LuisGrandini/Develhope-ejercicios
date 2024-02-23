const order = {

};


// if (order) {
//   console.log(order.customer.address);
// }

if (!order?.customer?.address?.city) {
  console.log("City required");
} 

