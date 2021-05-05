import React from 'react';
import Fab from '@material-ui/core/Fab';
import { Typography } from '@material-ui/core';
import mojs from 'mo-js';
import PropTypes from 'prop-types';
import HandIcon from './ClapButton/HandIcon';

const countAnimationTimeline = new mojs.Timeline();
const tlDuration = 1500;
const countDuration = 500;
const clapButtonParentRef = React.createRef();
const clapCountRef = React.createRef();
const animationArray = [];
export default function Index(props) {
  const [userClapCount, setUserClapCount] = React.useState(props.userClapCount);
  const [isShowClapCount, setIsShowClapCount] = React.useState(false);
  const [currentClapCount, setcurrentClapCount] = React.useState(props.currentClapCount);
  React.useEffect(() => {
    const circleBurst = new mojs.Burst({
      parent: clapButtonParentRef.current,
      count: 8,
      radius: { 20: props.radius },
      children: {
        fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
        opacity: 0.6,
        radius: 10,
        direction: [-1, -1, -1, 1, -1],
        swirlSize: 'rand(10, 14)',
        duration: tlDuration,
        delay: 0,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        isSwirl: true,
      },
    });

    const lineBurst = new mojs.Burst({
      parent: clapButtonParentRef.current,
      count: 18,
      angle: { 0: 10 },
      radius: { 20: props.radius },
      children: {
        fill: '#988ADE',
        shape: 'line',
        opacity: 0.6,
        radius: { 'rand(5,20)': 0 },
        scale: 1,
        stroke: '#988ADE',
        strokeWidth: 2,
        duration: tlDuration,
        delay: 0,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
      },
    });

    const halfCircleBurst = new mojs.Burst({
      parent: clapButtonParentRef.current,
      count: 6,
      radius: { 20: props.radius },
      angle: { 0: 10 },
      children: {
        fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
        scale: 1,
        radius: { 7: 0 },
        opacity: 0.6,
        duration: tlDuration,
        delay: 0,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
      },
    });
    const negetiveHalfCircleBurst = new mojs.Burst({
      parent: clapButtonParentRef.current,
      count: 6,
      angle: 45,
      degree: -90,
      radius: { 20: props.radius },
      children: {
        fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
        scale: 1,
        radius: { 7: 0 },
        opacity: 0.6,
        duration: tlDuration,
        delay: 0,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
      },
    });

    const triangleBurst = new mojs.Burst({
      parent: clapButtonParentRef.current,
      radius: { 20: props.radius },
      count: 10,
      angle: 30,
      children: {
        shape: 'polygon',
        radius: { 6: 0 },
        scale: 1,
        stroke: 'rgba(211,84,0 ,0.5)',
        strokeWidth: 2,
        angle: 210,
        duration: tlDuration,
        delay: 0,
        speed: 0.7,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
      },
    });
    animationArray.push(circleBurst, lineBurst, halfCircleBurst, negetiveHalfCircleBurst, triangleBurst);

    const countAnimation = new mojs.Html({
      isShowStart: isShowClapCount,
      el: clapCountRef.current,
      opacity: { 1: 1 },
      y: -20,
      x: 0,
      duration: countDuration,
    })
      .then({
        opacity: { 1: 0 },
        y: -props.radius / 2,
        delay: countDuration / 2,
      })
      .then({
        y: -20,
        x: 0,
        delay: 1,
      });

    countAnimationTimeline.add([countAnimation]);
  }, []);

  const handleChange = () => {
    setIsShowClapCount(true);
    if (userClapCount < props.maxClapCount) {
      setUserClapCount(userClapCount + props.step);
      setcurrentClapCount(currentClapCount + props.step);
      countAnimationTimeline.replay();
      const itemArray = Math.floor(Math.random() * animationArray.length);
      const clapAnimationTimeline = new mojs.Timeline();
      clapAnimationTimeline.add(animationArray[itemArray]);
      clapAnimationTimeline.replay();
    }
  };
  const { iconComponent: clapIcon } = props;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      {...props}
    >
      <div
        style={{
          textAlign: 'center',
          marginBottom: '15px',
        }}
      >
        <Fab
          color={props.countCircleColor}
          aria-label="add"
          size={props.countCircleSize}
          ref={clapCountRef}
          style={{ backgroundColor: props.countCircleColor }}
        >
          <Typography style={{ color: 'white' }}>+{userClapCount}</Typography>
        </Fab>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Fab
          color={props.clapCircleColor}
          size={props.clapCircleSize}
          onClick={handleChange}
          disabled={userClapCount >= props.maxClapCount}
          style={{ backgroundColor: props.clapCircleColor }}
          ref={clapButtonParentRef}
        >
          {props.iconComponent}
        </Fab>
      </div>
      <div style={{ textAlign: 'center', margin: '8px 0px 0px 8px' }}>
        <Typography
          style={{
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none',
          }}
        >
          +{currentClapCount}
        </Typography>
      </div>
    </div>
  );
}
Index.defaultProps = {
  iconComponent: <HandIcon size={30} />,
  currentClapCount: 0,
  userClapCount: 0,
  maxClapCount: 5,
  step: 2,
  clapCircleSize: 'large',
  countCircleSize: 'small',
  clapCircleColor: 'secondary',
  countCircleColor: 'primary',
  radius: 100,
};
Index.propTypes = {
  iconComponent: PropTypes.func,
  currentClapCount: PropTypes.number,
  userClapCount: PropTypes.number,
  step: PropTypes.number,
  maxClapCount: PropTypes.number,
  clapCircleSize: PropTypes.string,
  countCircleSize: PropTypes.string,
  clapCircleColor: PropTypes.string,
  countCircleColor: PropTypes.string,
  radius: PropTypes.number,
};
