import Image from "components/Image";
import Cross from "assets/star.svg";
import Star from "assets/star.svg";
import type { Pool } from "utils/fetch/fetchPools";

type ButtonProps = {
  add: (i: Pool) => void;
  remove: (i: Pool) => void;
  isPresent: boolean;
  disabled: boolean;
  item: Pool;
};

// Button for adding or removing item from watchlist.

const WatchlistButton = ({ add, remove, isPresent, item, disabled }: ButtonProps) => (
  <button
    disabled={disabled}
    onClick={() => (isPresent ? remove(item) : add(item))}
    className="text-white font-bold py-2 px-4 border-4 hover:text-red-400 rounded flex items-center justify-center">
    {isPresent ? (
      <>
        <Image className="flex mr-3" src={Cross} alt="star icon" width={20} height={20} />
        Remove from Watchlist
      </>
    ) : (
      <>
        <Image className="flex mr-3" src={Star} alt="star icon" width={20} height={20} />
        Add to Watchlist
      </>
    )}
  </button>
);

export default WatchlistButton;
