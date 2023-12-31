import { TAppDispatch, TState } from '../types/state.ts';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
