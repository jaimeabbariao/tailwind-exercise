import { useState } from "react";
import { Heart, CircleNotch } from "@phosphor-icons/react";
import { cn } from "./utils/cn";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLike = () => {
    setLoading(true);
    setTimeout(() => {
      setLiked(!liked);
      setLoading(false);
    }, 2000);
  };

  return (
    <Button
      className={cn(
        "ring-offset-0 ring-2 rounded-full",
        "hover:text-white",
        !liked &&
          "ring-slate-500 hover:ring-slate-700 text-slate-500 hover:bg-slate-600",
        liked &&
          "ring-red-500 hover:ring-red-700 text-red-500 hover:bg-red-600",
      )}
      onClick={handleLike}
    >
      {loading ? <CircleNotch className="animate-spin" /> : <Heart />}
      <span className="font-medium">Like</span>
    </Button>
  );
}

function Button({
  onClick,
  className,
  children,
}: React.PropsWithChildren<{ className: string; onClick: () => void }>) {
  return (
    <button
      className={cn(
        "flex flex-row justify-between items-center w-20 px-3 py-2",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default LikeButton;
