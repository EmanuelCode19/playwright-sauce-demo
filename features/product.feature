Feature: Product

  Background:
     Given El usuario abre SauceDemo
      And el usuario ha Iniciado sesion con "standard_user" y "secret_sauce"

  Scenario: Desvincular usuario
    When toca el menu burguer 
    And toca el boton Logout
    Then se debe mostrar la pantalla de login

  Scenario: Filtrar productos por precio, nombre desde la pantalla productos
    When el usuario toca el filtro y selecciona "<selectFilter>" 
    Then se deben filtrar los productos de acuerdo al filtro
    And el primer producto dede contener el nombre "<name>" y precio "<price>"

    Examples: 
    | selectFilter        | name                              | price  |
    | Name (A to Z)       | Sauce Labs Backpack               | 29.99  |
    | Name (Z to A)       | Test.allTheThings() T-Shirt (Red) | 15.99  |
    | Price (low to high) | Sauce Labs Onesie                 | 7.99   |
    | Price (high to low) | Sauce Labs Fleece Jacket          | 49.99  |
  
Scenario: Acceder a la descripcion de un producto
  When el usuario toca el card del producto "<name>"
  Then se debe mostrar la descripcion "<description>" del producto
  And se debe mostrar la imagen "<img>", el titulo "<name>" y el precio "<price>" correspondiente al producto

  Examples:
   | img                                                            | description            | name                              | price  |
   |/assets/sauce-backpack-1200x1500-CjRW-Djj.jpg | carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.| Sauce Labs Backpack | 29.99  |
   |/assets/bike-light-1200x1500-DxcZRFOA.jpg     | A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. | Sauce Labs Bike Light | 9.99  |
   |/assets/bolt-shirt-1200x1500-mR0ldpVS.jpg     | Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. | Sauce Labs Bolt T-Shirt  | 15.99   |
    
Scenario: agregar productos al carrito de compras
  When selecciona el producto "<name>" 
  And toca el boton "Add to cart"
  Then se debe agregar al carrito y contabilizarse el articulo agregado en el icono del carrito con el valor "1"
  And el boton cambia al label "Remove"
  
  Examples: 
   | name                              |   
   | Sauce Labs Backpack               | 
   | Test.allTheThings() T-Shirt (Red) | 
   | Sauce Labs Onesie                 | 
   | Sauce Labs Fleece Jacket          | 

Scenario: agregar productos al carrito de compras
  When agrega los productos "<names>" 
  Then se deben contabilizar los articulos agregados en el icono del carrito con el valor "<quantity>"
  
  Examples: 
   | names                                                          |   quantity  |
   | Sauce Labs Backpack,Sauce Labs Onesie, Sauce Labs Fleece Jacket|     3       |
  

Scenario: Eliminar productos recientemente agregado al carrito de compras
  And el usuario ha agregado el "<name>" articulo al carrito 
  When hace clic en el boton "Remove"
  Then el boton cambia al label "Add to cart"
  And se debe eliminar el producto del carrito y vizualizar que el icono del carrito resta el producto eliminado de la contabilidad de agregados
  
  Examples: 
   | name                              |   
   | Sauce Labs Backpack               | 
   | Test.allTheThings() T-Shirt (Red) | 
   | Sauce Labs Onesie                 | 
   | Sauce Labs Fleece Jacket          | 
