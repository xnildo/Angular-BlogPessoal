import { Tema } from "./Tema";
import { User } from "./User";

export class Postagem{
  public id: number;
  public titulo: string;
  public texto: string;
  public data: Date;
  public curtidas: number;
  public usuario: User;
  public tema: Tema; //temos 1 tema para varias postagens relação OneToMany

}
