import { cn } from "tailwind-variants";

import { type SurfaceVariants, surfaceVariants } from "./surface.variants";

// Root
interface SurfaceProps extends SurfaceVariants, React.ComponentProps<"div"> {}

const Surface = ({ className, ...props }: SurfaceProps) => {
  const styles = surfaceVariants();
  return (
    <div
      className={cn(className, styles)}
      {...props}
    />
  );
};

export default Surface;
