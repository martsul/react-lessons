import { MoonSvg } from "../svg/moon-svg";
import { SunSvg } from "../svg/sun-svg";
import { useTheme } from "../theme-context/use-theme";

export const SwitchTheme = () => {
  const { isLightTheme, changeTheme } = useTheme();

  return (
    <button onClick={changeTheme} type="button">
      {isLightTheme && <SunSvg />}
      {!isLightTheme && <MoonSvg />}
    </button>
  );
};
