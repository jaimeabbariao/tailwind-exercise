import { useState } from "react";
import { Heart, CircleNotch } from "@phosphor-icons/react";

// TODO: Button should have a width of 80px with 12px of horizontal padding and 8px of vertical padding
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
    <button
      // TODO: Fill in the appropriate styles here
      className=""
      onClick={handleLike}
    >
      {loading ? (
        <CircleNotch
          // TODO: Fill in the appropriate style here
          className=""
        />
      ) : (
        <Heart />
      )}
      <span
        // TODO: Fill in the appropriate style here
        className=""
      >
        Like
      </span>
    </button>
  );
}

export default LikeButton;
