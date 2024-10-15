import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany} from "typeorm";
//typeorem maneja lo que es la estructura de las tablas mediante una clase
import { Book } from "./book.entity";
import { Field, ObjectType } from 'type-graphql'

@ObjectType()//para retornar un objeto, no devuelve un string o un numero 


@Entity()//para que la clase sea interpretada como un entity por typeorm

export class Author {
    //@PrimaryGeneratedColumn() indica que la propiedad id es una 
    //columna en la base de datos que se generará automáticamente. Es decir, 
    //se asignará un valor único cada vez que se inserte un nuevo registro en la tabla.
    @Field()//para exponer una propiedad de una clase como un campo en el esquema de GraphQL. Esto permite que la propiedad sea accesible en las consultas y mutaciones de GraphQL.
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()//Indica que la propiedad será una columna en la tabla correspondiente de la base de datos.
    fullName!: string
    
    @Field({nullable: true})//es anulable porque cuando se crea un autor no vamos a tener el libro
    @OneToMany(() => Book, book => book.author, { nullable:true })
    books!: Book
    //un autor tiene muchos libros

    
    @Field(() => String)//indica que es de tipo string
    @CreateDateColumn({ type: 'timestamp'})
    //CreateDateColumn Se utiliza para definir una columna que se llenará automáticamente con la fecha de creación del registro.
    crateAt!: string

    /*El símbolo ! después de una variable o propiedad indica que el desarrollador 
    garantiza que la propiedad no será null ni undefined en el momento en que se 
    acceda a ella. Esto se conoce como el operador de aserción de no nulo. */
}