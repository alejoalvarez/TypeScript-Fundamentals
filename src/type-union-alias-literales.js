"use strict";
exports.__esModule = true;
// 10, '10'
var idUser;
idUser = 10;
idUser = '10';
// Find an username by Id
function getUsernameById(id) {
    // Logica de negocio, find the user
    console.log('>>id:', id);
    return 'luixaviles';
}
getUsernameById(20);
getUsernameById('45');
var idUser2;
idUser = 10;
idUser = '10';
// Buscar username dado un ID
function getUsernameById2(id) {
    // Logica de negocio, find the user
    return 'luixaviles';
}
getUsernameById(20);
getUsernameById('20');
