import { NameSpace, SORT_TYPES } from '../../../const';
import { City } from '../../../types/city';
import { State } from '../../../types/state';

export const getSelectedSortType = (state: State): SORT_TYPES =>
  state[NameSpace.App].selectedSortType;

export const getSelectedCity = (state: State): City =>
  state[NameSpace.App].selectedCity;
