
export default function productsToArrayService() {
  return (
    fetch("JSON/products.json").then(response => response.json()).then(json => console.log(json))
  )
}
