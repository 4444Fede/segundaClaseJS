/*
Tienes dos listas de productos en tu tienda online. Combina estas listas en una sola usando lo visto anteriormente y mostrarlo por consola.
*/

let electronics = ['laptop', 'phone', 'tablet']; 
let accessories = ['headphones', 'charger', 'case']
let shoppingCart = [...electronics, ...accessories]
console.log(shoppingCart)

/*
Tienes una lista de los productos más vendidos. Extrae el primero y el segundo producto usando destructuring.
*/

let bestSellers = ['laptop', 'phone', 'tablet', 'monitor']
let [firstBestSeller, secondBestSeller] = bestSellers
console.log(`${firstBestSeller} ${secondBestSeller}`)

/*
Verifica si el producto phone existe en la lista de productos, si existe, mostrar por consola un mensaje “Existe el producto [nombre del producto]”
*/

let saleItems = ['laptop', 'phone', 'headphones']
function productIsInSale(product){
	if (saleItems.includes(product)){
		console.log(`Existe el producto ${product}`)
	}else{
		console.log(`El producto que estas buscando no existe`)
	}
}
productIsInSale(`phone`)

/*
Verifica si un producto específico está en la lista de deseos. Si existe, mostrar por consola un mensaje “El producto existe, su nombre es [nombre del producto]”
*/

let wishlist = ['laptop', 'phone', 'headphones']
function productIsInWishList(product){
	if (wishlist.includes(product)){
		console.log(`El producto existe, su nombre es ${product}`)
	}else{
		console.log(`El producto que estas buscando no existe`)
	}
}
productIsInWishList(`pencil`)

/*
Filtra los productos que empiezan con la letra 'p' en la lista.
*/

let products = [
  'laptop',
  'phone',
  'tablet',
  'printer', 
  'pen',
  'monitor',
  'keyboard',
  'mouse',
  'headphones',
  'camera',
  'notebook'
]
let productsWithP = products.filter(function(product){
	return product.includes(`p`)
})
console.log(productsWithP)

/*
Escribe una función combineProductLists que tome dos listas de productos y las combine en una sola usando la sintaxis spread.
*/

function combineProductLists(firstArray, secondArray){
	let combinedList = [...firstArray, ...secondArray]
	return combinedList
}
console.log(`La lista combinada es: ${combineProductLists(productsWithP, bestSellers)}`)

/*
Crea una función getTopTwo que tome una lista de productos y devuelva los dos primeros usando destructuring.
*/

function getTopTwo(array){
	let [firstElement, secondElement] = array
	let firstTwoElements = [firstElement, secondElement]
	return firstTwoElements
}
console.log(`Los primeros 2 elementos son: ${getTopTwo(products)}`)

/*
Escribe una función isOnSale que verifique si algún producto de una lista de productos en oferta es un artículo específico.
Ejemplo, si tengo una lista de productos electrónicos, y quiero que el producto en oferta sea celular, entonces ese es el que debería ser tomado en cuenta a la hora de validar dentro de nuestra función.
*/

function isOnSale(product, saleItems){
  return `El elemento ${product} existe: ${saleItems.includes(product)}`
}
console.log(isOnSale(`phone`, saleItems))

/*
Crea una función areAllWordsLong que verifique si todas las palabras en una lista tienen más de tres letras.
*/

let words = [`Gato`, 'Gatero', 'Mal', 'uish', 'Otro', 'Precio']
function areAllWordsLong(array){
	let wordsGreaterThanThree = array.every(function(word){
		return word.length > 3
	})
	return `Todas las palabras tienen mas de 3 letras: ${wordsGreaterThanThree}`
}
console.log(areAllWordsLong(words))

/*
Crea una función areAllEven que verifique si todos los números en una lista son pares.
*/

let numbers = [44, 4, 444, 4444, 44444444, 13, 11, 29, 37, 5, 3, 15]
function areAllEven(array){
	let allEven = array.every(function(number){
		return number%2 === 0
	})
	return `Todos los numeros son pares: ${allEven}`
}
console.log(areAllEven(numbers))

/*
Escribe una función findProductWithLetter que encuentre el primer producto en la lista que contiene una letra específica.
*/

products = ['phone', 'laptop', 'cellphone', 'tablet', 'book', 'camera']
function findProductWithLetter(productsList, letter){
	let especificProduct = productsList.find(function(product){
		return product.includes(letter)
	})

	return especificProduct ? `Producto con ${letter}: ${especificProduct}` : `No existe ningun producto con ${letter}`
}
console.log(findProductWithLetter(products, 'x'))

/*
Define una función createProduct que agregue a un array el producto, pero que antes verifique si el producto ya existe en ese array
Ejemplo de uso:
Si el producto existe Mostrar mensaje El producto [nombre] ya existe

Si no existe, lo agrego al array y retorno los valores.
*/

function createProduct(productList, newProduct){
	if (productList.includes(newProduct)) {
		return `El producto ${newProduct} ya existe`
	}else{
		let newProductList = [...productList, newProduct]
		return newProductList
	}
}
console.log(createProduct(products, 'camera'))

/*
Escribe una función arePricesInRange que compruebe si todos los precios de una lista están entre 50 y 150.
Ejemplos:
*/

const prices1 = [60, 80, 120, 150];
const prices2 = [40, 80, 120, 200];
function arePricesInRange(prices){
	let pricesAreInRange = prices.every(function(price){
		return price >= 50 && price <= 150
	})
	return `Los precios estan en rango: ${pricesAreInRange}`
}
console.log(arePricesInRange(prices2))
console.log(arePricesInRange(prices1))

/*
Define una función formatExpensiveProducts que tome una lista de precios y agregue una etiqueta Caro a los precios superiores a 100.
Ejemplo:
*/

let prices = [80, 120, 200, 90]
function formatExpensiveProducts(prices){
	let result = []
	let listWithExpensiveTag = prices.filter(function(price) {
	    if (price >= 100) {
	        result.push(` Caro: $${price}`)
	    }else{
	        result.push(` $${price}`)
	    }
    	return result
	})
	return `Aqui tienes la lista de productos con las tags correspondientes:${result}`
}
console.log(formatExpensiveProducts(prices))

/*
Define una función addIfNotExists que añada un producto a una lista solo si no está ya presente.
*/

function addIfNotExists(productList, newProduct){
	if (productList.includes(newProduct)) {
		return `El producto ${newProduct} ya se encuentra en la lista`
	}else{
		let newProductList = [...productList, newProduct]
		return newProductList
	}
}
console.log(addIfNotExists(products, 'sausage'))

/*
Crea una función createDescriptions que tome una lista de nombres de productos y una lista de precios, y devuelva una lista de descripciones que combine ambos usando map.
Se debe ver algo parecido a esto (La descripción puede cambiar según lo que estemos contemplando nosotros):
['laptop cuesta $1000', 'phone cuesta $500', 'tablet cuesta 300']
*/

products = ['phone', 'headphones', 'cellphone', 'camera', 'tablet']
prices = [44, 200, 4444, 1500, 1307]
function createDescriptions(productList, priceList) {
    let listWithDescriptions = productList.map(function(product, index) {
        return `${product} cuesta $ ${priceList[index]}`
    });
    return listWithDescriptions
}
console.log(createDescriptions(products, prices))

/*
Crea una función addToWishlist que añada un producto a la lista de deseos solo si el producto no está ya presente y la lista de deseos tiene menos de 5 productos. Realizar validaciones correspondientes.
*/

wishlist = ['laptop', 'phone', 'headphones', 'camera', 'headphones']
function addToWishlist(productList, newProduct){
	if (productList.includes(newProduct)) {
		return `El producto ${newProduct} ya esta en su lista de deseados`
	}else{
		if (productList.length >= 5) {
			return `No puede agregar mas productos a la lista`
		}else{
			let newProductList = [...productList, newProduct]
			return newProductList
		}
	}
}
console.log(addToWishlist(wishlist, 'notebook'))

/*
Define una función inventoryMessages que tome una lista de productos y una lista de cantidades en inventario, devolviendo una lista de mensajes que indiquen si cada producto está en stock o agotado.
Ejemplo de salida:
// ['laptop está en stock con 5 unidades', 'phone está agotado', 'tablet está en stock con 3 unidades']
*/

let inventoryStock = [44, 10, 5, 0, 4]
function inventoryMessages(productList, stockList) {
	let productsAndStock = productList.map(function(product, index) {
		if (stockList[index] > 0){
			return `${product} esta en stock con ${stockList[index]} unidades`
		}else{
			return `El producto ${product} esta agotado`
		}
	})
	return productsAndStock
}
console.log(inventoryMessages(products, inventoryStock))