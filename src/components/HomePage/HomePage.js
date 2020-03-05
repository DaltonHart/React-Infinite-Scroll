import React from 'react';
import { useState, useEffect } from 'react';
import './HomePage.css';
import InfiniteScroll from 'react-infinite-scroller';
import Figure from 'react-bootstrap/Figure';
import Pixa from '../../models/Pixa';

let page = 0;

const Image = ({ data }) => (
  <Figure>
    <Figure.Image width={window.innerWidth / 3.5} src={data.previewURL} />
  </Figure>
);

const displayPics = items =>
  items.map((data, index) => <Image key={index} data={data} />);

function HomePage() {
  const [items, setItems] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  const getNewPhotos = async () => {
    page++;
    try {
      const response = await Pixa.searchPics({
        q: 'dog',
        image_type: 'photo',
        page
      });
      setItems(items.concat(response.data.hits));
      setTotalHits(response.data.totalHits);
      setInitialized(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!initialized) {
      getNewPhotos();
    }
  });

  return (
    <div className='HomePage'>
      <InfiniteScroll
        pageStart={page}
        loadMore={getNewPhotos}
        hasMore={totalHits > items.length}
        threshold={100}
      >
        {displayPics(items)}
      </InfiniteScroll>
    </div>
  );
}
export default HomePage;
