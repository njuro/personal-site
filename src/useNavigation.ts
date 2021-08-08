import { useContext, useEffect } from "react";
import { NavigationContext } from "./components/App";

export default function useNavigation(path: string | undefined) {
  const { setActivePath } = useContext(NavigationContext);

  useEffect(() => setActivePath(path), [setActivePath, path]);
}
