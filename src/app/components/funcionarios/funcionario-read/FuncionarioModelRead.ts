import { Empresa } from './../../empresas/empresa.model';
export interface FuncionarioRead {    
    id?: number,
    matricula: number,
    nome: String,
    empresa: Empresa
}