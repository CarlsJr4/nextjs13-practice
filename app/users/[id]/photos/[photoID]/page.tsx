import React from 'react';

interface Props {
  params: {
    photoID: number;
  };
}

const PhotoPageWithID = ({ params: { photoID } }: Props) => {
  return <div>PhotoPageWithID {photoID}</div>;
};

export default PhotoPageWithID;
