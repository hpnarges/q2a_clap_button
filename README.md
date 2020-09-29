
![Farmers Market Finder Demo](https://s1.gifyu.com/images/clap1.gif)
![Farmers Market Finder Demo](https://s1.gifyu.com/images/clap2.gif)
![Farmers Market Finder Demo](https://s1.gifyu.com/images/clap4.gif)

### Install


```sh
$ npm install q2a_clap_button --save
```

### Usage

```sh
import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default () => {

    return (
      <ClapButton
          iconComponent={<ThumbUpIcon style={{ width: '20px', height: '20px' }} />}
          currentClapCount={0}
          count={0}
          step={1}
          maxClapCount={100}
          // circleClapSize={'medium'}
          // circleClapColor={'#00f0ff'}
         // circleCountColor={'#ff00ff'}
         iconSize={5}
      radius={100}
       style={{
        marginTop: '300px',
       }}
    />
    );
}
```

### Props and Optional

| Props | Value |
| ------ | ------ |
| clapCircleSize | 'large' or 'medium' or 'small' |
| countCircleSize | 'large' or 'medium' or 'small' |
| clapCircleColor |{'#5f27ae'} |
| countCircleColor | {'#5b28ae'} |
| currentClapCount | {0} this number is start clap count |
| clapCount | {0} this number is start clap count |
| step|{1} this number is Step counting |
|maxClapCount| {20} this number is maximum Counting|
|radius |{100} this number is radius of animation |




License
----

MIT


