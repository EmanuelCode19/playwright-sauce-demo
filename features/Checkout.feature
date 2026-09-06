Feature: checkout

    Background:
        Given El usuario abre SauceDemo
        And el usuario ha Iniciado sesion con "standard_user" y "secret_sauce"
        And el usuario ha agregado "Sauce Labs Bike Light, Sauce Labs Backpack " productos al carrito
        And toca el icono de carrito
        And ha tocado el boton Checkout

    Scenario: Completar proceso de informacion de usuario con campos vacios
        Given el usuario se encuentra en la pantalla de checkout
        When toca el boton Continue
        Then el sistema muestra alerta "Error: First Name is required"
        

    Scenario Outline: Completar el formulario parcialmente 
        Given el usuario se encuentra en la pantalla de checkout
        When ingresa el valor "<name>" en el campo First Name
        And ingresa el valor "<lastName>" en el Last Name
        And ingresa el valor "<postalCode>" en el campo Postal Code
        And toca el boton Continue
        Then el sistema muestra alerta "<alert>"
    Examples:
    | name     | lastName   | postalCode |  alert                         |
    |          | De Jesus   |  1234      |  Error: First Name is required |
    |Emanuel   |            |  1234      |  Error: Last Name is required  |
    | Emanuel  | De Jesus |            |  Error: Postal Code is required|

     Scenario: Completar el formulario correctamente
        Given el usuario se encuentra en la pantalla de checkout
        When ingresa el valor "Emanuel" en el campo First Name
        And ingresa el valor "De Jesus" en el Last Name
        And ingresa el valor "1234" en el campo Postal Code
        And toca el boton Continue
        Then se debe mostrar la pantalla de overview
   
    