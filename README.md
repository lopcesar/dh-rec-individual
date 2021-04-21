# Ejercicio Recuperatorio

## Descripcion

La intencion de este repositorio es proveer un punto de partida para una evaluacion individual
como ultima instancia para la aprobacion del curso.

## Ejercitacion

La idea es que a partir de este proyecto, puedas implementar una extension basandote en el siguiente diseño:

![Diagrama Entidad-Relacion](docs/der.jpg?raw=true)

Las entidades en las que te tenes que concentrar en implementar son: `Serie`, `Season` y `Episode`, asi como tambien las tablas pivot necesarias y las asociaciones con las entidades ya implementadas.

En particular, esperamos que implementes:

- Modelos de Sequelize para estas entidades
- Migracion de la base de datos agregando dichas entidades y las asociaciones necesarias
- Controladores para los nuevas entidades con funciones para un CRUD completo de estas entidades y sus rutas en formato de WebAPI
- Validaciones para las rutas de creacion y actualizacion de todas las entidades.
- Una aplicacion de react con una vista que utilizando estos endpoints pueda mostrar una lista de los episodios

## Tips

- Hace uso de los materiales publicados en Playground para ayudarte a implementar estos requerimientos.
- Basate en las entidades que ya están implementadas como ejemplo para las nuevas.
- Para ayudarte a implementar y probar la WebAPI, recordá que disponés de [Postman](https://www.postman.com/)
- Cualquier duda que tengas, no dudes en consultarnos por Discord
