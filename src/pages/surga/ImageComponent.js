// components/ImageComponent.js

import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImageComponent = ({ initialTileString }) => {
  const [savedTileString, setSavedTileString] = useState(initialTileString);
  const [currentTileString, setCurrentTileString] = useState(initialTileString);

  useEffect(() => {
    // Whenever the savedTileString state updates, also update currentTileString
    setCurrentTileString(savedTileString);
  }, [savedTileString]);

  // Function to update the savedTileString and currentTileString
  const updateTileString = (newTileString) => {
    setSavedTileString(newTileString);
  };

  return (
    <div>
      <Image
        className='flex'
        src={currentTileString}
        alt='current-tile'
        width={120}
        height={150}
      />
      {/* Example button to update the tile string for demonstration */}
      <button onClick={() => updateTileString('/path/to/new-tile.png')}>
        Update Tile
      </button>
    </div>
  );
};

export default ImageComponent;
