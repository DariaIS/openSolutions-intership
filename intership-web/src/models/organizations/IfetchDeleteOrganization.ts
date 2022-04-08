import { Dispatch, SetStateAction } from 'react';
import { AppDispatch } from '../store';

export type IfetchDeleteOrganization = (
    organizationId: number,
    // setError: Dispatch<SetStateAction<string>>
  ) => Dispatch<AppDispatch>;
  