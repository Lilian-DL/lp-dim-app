import { Cocktail } from './cocktail';

export interface CocktailFormData {
  isUpdateMode: boolean;
  studentToUpdate?: Cocktail;
  idToCreate?: number;
}