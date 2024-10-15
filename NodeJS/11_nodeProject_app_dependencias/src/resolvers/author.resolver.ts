// book porque estamos trabajando con libros, resolver porque esta dentro de la carpeta resolver
import { Mutation, Resolver, Arg, InputType, Field } from 'type-graphql';
import { Author } from '../entity/author.entity';
import { getRepository, Repository} from 'typeorm';


@InputType()
class AuthorInput{
    @Field()
    fullaName!: string
}//se puede poner en otra ventana esta clase pero en este caso como el proyecto es simple lo dejo aca


@Resolver()//decorador, es una propuesta, no permite añadir anotaciones, metadatos, cambiar comportamientos de clases, propiedades, metodos, parametros 
export class AuthorResolver {
    
    authorRepository : Repository<Author>

    constructor() {
        this.authorRepository = getRepository(Author)
    }

    @Mutation(() => Author)//esta mutacion devuelve un objeto de tipo Author
    async createAuthor (
        @Arg("input", () => AuthorInput) input:AuthorInput //para recibir un parametro, "input:AuthorInput" el input es de tipo AuthorInput
    ): Promise<Author | undefined> {// el metodo createAuthor es mutation (guarda o genera datos en nuesta bd) 
        //cuando se crea el objeto queremos que devuelva todos los datos de este objeto
        //aca va la logica para hacer la consulta a la base de datos
        //para ayudarnos podemos entrar a "typeorm.io/#/" => "Entity Manager and Repository" => "Working with Repository" o "Working with Entity Manager" la dif es que entity manager tiene una coleccion de todas las entidades
        try{
            const createdAuthor = await this.authorRepository.insert({ fullName: input.fullaName });
            const result = await this.authorRepository.findOne(createdAuthor.identifiers[0].id)
            return result;
        }catch{
            console.error
        }
    }

}