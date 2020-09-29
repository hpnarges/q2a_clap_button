import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClapButton from '../src/ClapButton';

export default { title: 'Button' };

export const withEmoji = () => (
  <ClapButton
    iconComponent={<FavoriteIcon style={{ width: '20px', height: '20px', fill: 'white' }} />}
    clapTotalCount={0}
    clapCount={0}
    step={1}
    maxClapCount={10}
    // clapCircleSize={'medium'}
    // countCircleSize={'medium'}
    // ClapCircleColor={'#5f27ae'}
    // CountCircleColor={'#5b28ae'}
    // ClapCircleColor={'#3eae20'}
    // CountCircleColor={'#882dae'}
    radius={100}
    style={{
      marginTop: '300px',
    }}
  />
);
