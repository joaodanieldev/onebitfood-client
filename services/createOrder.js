export default async function createOrder(order) {
  const response =  await fetch( `{process.env.apiUr}/api/orders`,{
    method: 'POST',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({order: order})
  });
  return response;

}