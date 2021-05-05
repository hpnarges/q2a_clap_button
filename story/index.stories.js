import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClapButton from '../src';

export default { title: 'Button' };

export const withEmoji = () => (
  <ClapButton
    iconComponent={<FavoriteIcon style={{ width: '20px', height: '20px', fill: 'white' }} />}
    currentClapCount={1000}
    userClapCount={0}
    step={1}
    maxClapCount={10}
    // clapCircleSize={'medium'}
    // countCircleSize={'medium'}
    // clapCircleColor={'#5f27ae'}
    // countCircleColor={'#5b28ae'}
    radius={100}
    style={{
      marginTop: '300px',
    }}
  />
);
