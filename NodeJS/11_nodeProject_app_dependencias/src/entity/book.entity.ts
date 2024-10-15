import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne} from "typeorm";
//typeorem maneja lo que es la estructura de las tablas mediante una clase
import { Author } from "./author.entity";
import { Field, ObjectType } from 'type-graphql'


@Entity()//para que la clase sea interpretada como un entity por typeorm
export class Book {
    //Este decorador @PrimaryGeneratedColumn() indica que la propiedad id es una 
    //columna en la base de datos que se generará automáticamente. Es decir, 
    //se asignará un valor único cada vez que se inserte un nuevo registro en la tabla.
    @Field()//para exponer una propiedad de una clase como un campo en el esquema de GraphQL. Esto permite que la propiedad sea accesible en las consultas y mutaciones de GraphQL.
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()//Indica que la propiedad será una columna en la tabla correspondiente de la base de datos.
    title!: string
    
    @Field(() => Author)//en este caso no hace falta decir que es anulable porque cuando creemos un libro ya vamos a tener el autor 
    @ManyToOne(() => Author, author => author.books)
    author!: Author
    //ManyToOne muchos libros tienen un autor


    //CreateDateColumn Se utiliza para definir una columna que se llenará automáticamente con la fecha de creación del registro.
    @Field()
    @CreateDateColumn({ type: 'timestamp'})
    crateAt!: string

    /*El símbolo ! después de una variable o propiedad indica que el desarrollador 
    garantiza que la propiedad no será null ni undefined en el momento en que se 
    acceda a ella. Esto se conoce como el operador de aserción de no nulo. */
}