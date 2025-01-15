import { AppDispatch, AppStore, RootState } from "@/store/store";
import { useStore } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
