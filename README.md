# EXAMEN BIMESTRAL TÓPICOS ESPECIALES

Aplicación híbrida chat con ionic-angular-cordova y autenticación.

## Creación de componentes 🚀
_Para el manejo de las diferentes funcionalidades se creó los screen para login, registro y el chat_
_adaptando a las especificaciones solicitadas por el docente_
```
ionic generate page components/login
ionic generate page components/register
ionic generate component components/chat

```
## Creación de servicios 🚀
_El servicio de auth nos va  apermitir gestionar el login, logout y el registro de los usuarios de la app._  
_El servicio chats nos permite gestionar el accesso a nuestra base de datos en tiempo real a sus colecciones, usuarios y el storage._  
```
ionic generate service services/auth
ionic generate service services/chats

```
## Creación del guard🚀
El guard nos permite manejar la navegación por nuestra app, esto hace que el inicio de sesión sea fundamental,  
debido a esto cada usuario si no se encuentra debidamente logeado no podra acceder a las otras rutas, de igual manera  
si el usuario cierra sesión es direccionado al login.
```
generate guard guards/auth

```
## Dependencias 
La libreria de firebase nos permite gracias a sus elementos realizar en tiempo real las modificaciones en nuestro proyecto en   
firebase.  
Tomar en cuenta las credenciales otorgadas por la plataforma para implementar en el ennvironment de nuestro proyecto.
```
npm install firebase @angular/fire
```
### Cifrado
La librería crypto nos ayuda a cifrar nuestros mensajes o la información que vamos a requerir que se lo haga de esta manera   
se la instala y se verifica la compatibilidad con la versión en la que estemos trabajando.
```
npm install crypto-js --save
npm install @types/crypto-js --save
```

## Construido con 🛠️

* [IONIC](https://ionicframework.com/) - El framework web usado
* [Npm](https://www.npmjs.com/) - Manejador de dependencias
* [Firebase](https://firebase.google.com/?gclid=EAIaIQobChMIz7bQrPif7gIVVuvjBx2C7wzlEAAYASAAEgJ0oPD_BwE) - Database realtime


## ENTREGABLES 
* [APK](https://drive.google.com/drive/folders/1Z3w-d6Zjj7F4k9PjEtIvDm-gHPfeczVH?usp=sharing) - Repositorio apk.
* [VIDEO](https://drive.google.com/drive/folders/1Z3w-d6Zjj7F4k9PjEtIvDm-gHPfeczVH?usp=sharing) - Video demostrativo app.



## Autor ✒️


* [Gabriel Salgado](https://github.com/Lgsalgado/)
