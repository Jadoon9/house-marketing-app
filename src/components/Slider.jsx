import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  collection,
  getDocs,
  orderBy,
  limit,
  query,
} from '@firebase/firestore';
import SwiperCore, { Navigation, Pagination, Scrollbar, Ally } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import db from '../firebase';
import Spinner from './Spinner';
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const Slider = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      const listingRef = collection(db, 'listings');
      const q = query(listingRef, orderBy('timestamp', 'desc'), limit(5));
      const querySnap = await getDocs(q);
      let listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setLoading(false);
    };

    try {
      fetchListings();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    listings && (
      <p className='exploreHeading'>
        <Swiper slidesPerView={1} pagination={{ clickable: true }}>
          {listings.map(({ data, id }) => (
            <SwiperSlide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
              <div
                style={{
                  background: `url(${data.imgUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='swiperSlideDiv'
              >
                <p className='swiperSlideText'>{data.name}</p>
                <p className='swiperSlidePrice'>
                  ${data.discountPrice ?? data.regularPrice}{' '}
                  {data.type === 'rent' && '/month'}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </p>
    )
  );
};

export default Slider;
