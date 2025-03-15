const productsArray = [
  {
    id:"1",
    img:"https://th.bing.com/th/id/OIP.A8HQOX4gXCeif1PQ98bKngHaE8?rs=1&pid=ImgDetMain",
    title: "Coffee",
    price: 199
  },
  {
    id:"2",
    img:"https://th.bing.com/th/id/OIP.UsuwPZja4JwrJBa_76b_hAHaEc?rs=1&pid=ImgDetMain",
    title: "Sunglasses",
    price: 299
  },
  {
    id:"3",
    img:"https://th.bing.com/th/id/R.0f23456a05f4c924cc15c3d4a2ded88c?rik=CNPwvsT6nXZyKg&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2000x2000%2fPanasonic_dmc_lx7k_Lumix_LX7_Digital_Camera_880960.jpg&ehk=mZCFXQiF4NJVSnNs70sT9g6JlmpHY77VEXO9xh%2fGML4%3d&risl=&pid=ImgRaw&r=0",
    title: "Camera",
    price: 3999
  }
];

function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);

  if(productData === undefined){
    console.log("Product Data does not exist for id:" + id);
  }
  return productData;
}

export { productsArray, getProductData };