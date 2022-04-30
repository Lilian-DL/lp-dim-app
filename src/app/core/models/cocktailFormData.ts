import { Cocktail } from './cocktail';

export interface StudentFormData {
  isUpdateMode: boolean;
  studentToUpdate?: Cocktail;
  idToCreate?: number;
}