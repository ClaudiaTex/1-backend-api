# Practica 1 Backend CICE: Desarrollar una API con NodeJS y Express.

## Objetivo

Desarrollar una API que permita realizar el CRUD (crear, leer, actualizar y eliminar) completo sobre un array de users, utilizando NodeJS y express.

## Observaciones

- El user estará compuesto unicamente por name, age y dni.

- El dni tendrá el siguiente formato: se compondra de tres letras mayusculas, dos caracteres numericos, una letra en minuscula y un número, ejemplos:
  * EEE85a2
  * AGH01d0
  * PPL00z9
  
  Se debe validar con una expresión regular(REGEX) el formato correcto del dni, y emitir un mensaje de error en caso de ser incorrecto.

## CRUD

#### Create:

Permitirá almacenar un user con los parámetros name, age y dni.
- method: POST
- route: /user
      
#### Read:

Se dividirá en dos rutas: 
- route#0: retornará todos los users almacenados en el arreglo (/users).
- route#1: retornará el user que haga match con el dni que se le envía como parámetro (/users/:dni).
- method: GET

#### Update:

Actualizará los datos de un user que haga match con el dni enviado como parámetro.
- method: PUT
- route: /user/:dni

#### Delete:

Eliminado lógico de un user según el dni que se pase como parámetro.
- method: DELETE
- route: /user/:dni

### Herramientas utilizadas:

- NodeJS
- Express
- Nodemon
- Morgan
- Postman