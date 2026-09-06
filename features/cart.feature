Feature: Cart

    Background:
      Given El usuario abre SauceDemo
      And el usuario ha Iniciado sesion con "standard_user" y "secret_sauce"
    

    Scenario Outline: Validar productos agregados se muestran en el carrito de compra
        Given el usuario ha agregado "<products>" productos al carrito
        When toca el icono de carrito
        Then se deben mostrar los <quantity> articulos seleccionados
     Examples:
    | quantity | products |
    |2         |  Sauce Labs Bike Light, Sauce Labs Backpack        |
    |3         |  Sauce Labs Bike Light, Sauce Labs Backpack,Sauce Labs Onesie         |
        
    Scenario Outline: Validar detalles de productos
        Given el usuario ha agregado "<products>" productos al carrito
        When toca el icono de carrito
        Then se muestran los detalles de los "<quantity>" articulos
        And los precios deben coincidir con los mostrados en la pantalla de productos
        And los detalles deben coincidir con los mostrados en la pantalla de productos
     Examples:
    | quantity | products |
    |2         |  Sauce Labs Bike Light, Sauce Labs Backpack        |
    |3         |  Sauce Labs Bike Light, Sauce Labs Backpack,Sauce Labs Onesie         |