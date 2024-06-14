import { memo } from 'react';
import CitiesList from './cities-list';

const MemoizedCitiesList = memo(CitiesList);

export default MemoizedCitiesList;
