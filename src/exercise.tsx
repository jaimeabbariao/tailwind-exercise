import { useState } from "react";
import { Heart, CircleNotch } from "@phosphor-icons/react";

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
