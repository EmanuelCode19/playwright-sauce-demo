Feature: Login

  @regresion @smoke
  Scenario: Login exitoso
    Given El usuario abre SauceDemo
    When Inicia sesion con "standard_user" y "secret_sauce"
    Then debe visualizar la pagina de inventario

  @regresion @smoke
  Scenario Outline: Login fallido
    Given El usuario abre SauceDemo
    When Inicia sesion con "<user>" y "<pass>"
    Then se debe mostrar una alerta con el mensaje "<message>"
  
   Examples:
  | user           | pass         | message                                                                     |
  | standard_user  | 123456       | Epic sadface: Username and password do not match any user in this service   |
  | 123456         | secret_sauce | Epic sadface: Username and password do not match any user in this service   |
  | standard_user  |              | Epic sadface: Password is required                                          |
  |                | secret_sauce | Epic sadface: Username is required                                          |

 