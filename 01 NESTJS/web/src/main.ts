import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
// package.json
// npm run start
// nodejs command prompt

/// VARIABLES
// TIPOS DE VARIABLES

// MUTABLES ( reasignar -> = )
var variableUno = 1; // NO USAMOS VAR !
let variableDos = 2;
variableUno = 3;
variableDos = 4;
// INMUTABLES ( No se pueden reasignar X -> != )
const variableTres = 5;
// variableTres = 2; // ERROR!

// PRIMITIVAS PRIMITIVAS (Typescript)

const texto: string = ''; // "" ``
const numeroEntero: number = 1;
const numeroFlotante: number = 1.2;
const soyEstudiante: boolean = true; // false
const noDefinido = undefined;
const noHayNada = null;
const fecha: Date = new Date();
// Duck Typing
const textoDos = 'Adrian';
let cualquierCosa: any = 'Vicente';
cualquierCosa = 1;
cualquierCosa = true;
cualquierCosa = new Date();

class Usuario {
  constructor(
      public nombre: string,
      public apellido: string
  ) {
  }
}
const usuario: Usuario = new Usuario('Adrian', 'Eguez');
usuario.nombre;
usuario.apellido;

interface UsuarioInterface {
  nombre: string;
  apellido: string;
  edad? : number; // ? => Opcional // Valor por defecto es undefined
}






