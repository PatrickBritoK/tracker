export enum TipoDeNotificacao {
  SUCESSO,
  FALHA,
  ATENCAO,
}

export default interface INotificacao {
  titulo: string;
  texto: string;
  tipo: TipoDeNotificacao;
  id: number;
}
