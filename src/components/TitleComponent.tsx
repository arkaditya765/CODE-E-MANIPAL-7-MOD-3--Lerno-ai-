import { AnimatedShinyText } from "@/ui/animated-shiny-text";
import { cn } from "@/lib/utils";

interface TitleComponentProps {
  title: string; // explicitly type the prop
}

const TitleComponent: React.FC<TitleComponentProps> = ({ title }) => {
  return (
    <div
      className={cn(
        "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer border-white/5 bg-neutral-900 hover:bg-neutral-800"
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-neutral-400">
        <span>{title}</span>
      </AnimatedShinyText>
    </div>
  );
};

export default TitleComponent;

