import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const onCheckedChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm">Light</span>
      <Switch
        checked={theme === "dark"}
        onCheckedChange={onCheckedChange}
      />
      <span className="text-sm">Dark</span>
    </div>
  );
}