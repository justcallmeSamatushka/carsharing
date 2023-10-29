import { IPagination } from '../../shared/interfaces';

export interface QueryParams extends IPagination {
  keyword?: string;
  state_number?: string;
}
