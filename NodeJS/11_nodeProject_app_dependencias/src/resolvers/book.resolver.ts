// book porque estamos trabajando con libros, resolver porque esta dentro de la carpeta resolver
import { Query, Resolver } from 'type-graphql';


@Resolver()//decorador, es una propuesta, no permite añadir anotaciones, metadatos, cambiar comportamientos de clases, propiedades, metodos, parametros 
export class BookResolver {
    @Query(() => String)
    getAll(){//llamamos al metodo, para crear una consulta
        return 'All my books';
    }
}