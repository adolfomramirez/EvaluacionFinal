export interface Student {
    id: number;
    primerNombre: string;
    segundoNombre: string | null;
    primerApellido: string;
    segundoApellido: string;
    carrera: string;
    numeroCarnet: string;
    sede: string;
    jornada: string;
    fotoPerfil: string;
    cursosMatriculados: Course[];
  }
  
  export interface Course {
    semestre: number;
    semestrePensum: number;
    creditos: number;
    nombre: string;
    prerequisitos: string[];
    codigo: string;
    docente: string;
  }
  