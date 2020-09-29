![Farmers Market Finder Demo](https://s1.gifyu.com/images/clap1.gif)
![Farmers Market Finder Demo](https://s1.gifyu.com/images/clap2.gif)
![Farmers Market Finder Demo](https://s1.gifyu.com/images/clap4.gif)

### Install


```sh
$ yarn add q2a_clap_button --save
```

### Usage

```sh
import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
```

### Props and Options

| Props | Value |
| ------ | ------ |
| iconComponent|Custom component for clap icon|
| currentClapCount |Initial value for clap counts|
| userClapCount |How many times user clapped|
| step|Clap count increase on each click|
|maxClapCount| Upper-bound for userClapsCount|
| clapCircleSize | 'large' or 'medium' or 'small' |
| countCircleSize | 'large' or 'medium' or 'small' |
| clapCircleColor |color of clap circle|
| countCircleColor | color of count circle |
|radius |this number is radius of animation |

License
----

MIT


