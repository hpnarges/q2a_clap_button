Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _extends =
  Object.assign ||
  function (target) {
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i];
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

const _slicedToArray = (function () {
  function sliceIterator(arr, i) {
    const _arr = [];
    let _n = true;
    let _d = false;
    let _e;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i.return) _i.return();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    }
    if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    }
    throw new TypeError('Invalid attempt to destructure non-iterable instance');
  };
})();

exports.default = Index;

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _Fab = require('@material-ui/core/Fab');

const _Fab2 = _interopRequireDefault(_Fab);

const _core = require('@material-ui/core');

const _moJs = require('mo-js');

const _moJs2 = _interopRequireDefault(_moJs);

const _propTypes = require('prop-types');

const _propTypes2 = _interopRequireDefault(_propTypes);

const _HandIcon = require('./ClapButton/HandIcon');

const _HandIcon2 = _interopRequireDefault(_HandIcon);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const countAnimationTimeline = new _moJs2.default.Timeline();
const tlDuration = 1500;
const countDuration = 500;
const clapButtonParentRef = _react2.default.createRef();
const clapCountRef = _react2.default.createRef();
const animationArray = [];
function Index(props) {
  const _React$useState = _react2.default.useState(props.userClapCount);
  const _React$useState2 = _slicedToArray(_React$useState, 2);
  const userClapCount = _React$useState2[0];
  const setUserClapCount = _React$useState2[1];

  const _React$useState3 = _react2.default.useState(false);
  const _React$useState4 = _slicedToArray(_React$useState3, 2);
  const isShowClapCount = _React$useState4[0];
  const setIsShowClapCount = _React$useState4[1];

  const _React$useState5 = _react2.default.useState(props.currentClapCount);
  const _React$useState6 = _slicedToArray(_React$useState5, 2);
  const currentClapCount = _React$useState6[0];
  const setcurrentClapCount = _React$useState6[1];

  _react2.default.useEffect(function () {
    const circleBurst = new _moJs2.default.Burst({
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
        easing: _moJs2.default.easing.bezier(0.1, 1, 0.3, 1),
        isSwirl: true,
      },
    });

    const lineBurst = new _moJs2.default.Burst({
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
        easing: _moJs2.default.easing.bezier(0.1, 1, 0.3, 1),
      },
    });

    const halfCircleBurst = new _moJs2.default.Burst({
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
        easing: _moJs2.default.easing.bezier(0.1, 1, 0.3, 1),
      },
    });
    const negetiveHalfCircleBurst = new _moJs2.default.Burst({
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
        easing: _moJs2.default.easing.bezier(0.1, 1, 0.3, 1),
      },
    });

    const triangleBurst = new _moJs2.default.Burst({
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
        easing: _moJs2.default.easing.bezier(0.1, 1, 0.3, 1),
      },
    });
    animationArray.push(circleBurst, lineBurst, halfCircleBurst, negetiveHalfCircleBurst, triangleBurst);

    const countAnimation = new _moJs2.default.Html({
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

  const handleChange = function handleChange() {
    setIsShowClapCount(true);
    if (userClapCount < props.maxClapCount) {
      setUserClapCount(userClapCount + props.step);
      setcurrentClapCount(currentClapCount + props.step);
      countAnimationTimeline.replay();
      const itemArray = Math.floor(Math.random() * animationArray.length);
      const clapAnimationTimeline = new _moJs2.default.Timeline();
      clapAnimationTimeline.add(animationArray[itemArray]);
      clapAnimationTimeline.replay();
    }
  };
  const clapIcon = props.iconComponent;

  return _react2.default.createElement(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
      },
      ...props,
    },
    _react2.default.createElement(
      'div',
      {
        style: {
          textAlign: 'center',
          marginBottom: '15px',
        },
      },
      _react2.default.createElement(
        _Fab2.default,
        {
          color: props.countCircleColor,
          'aria-label': 'add',
          size: props.countCircleSize,
          ref: clapCountRef,
          style: { backgroundColor: props.countCircleColor },
        },
        _react2.default.createElement(_core.Typography, { style: { color: 'white' } }, '+', userClapCount)
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { textAlign: 'center' } },
      _react2.default.createElement(
        _Fab2.default,
        {
          color: props.clapCircleColor,
          size: props.clapCircleSize,
          onClick: handleChange,
          disabled: userClapCount >= props.maxClapCount,
          style: { backgroundColor: props.clapCircleColor },
          ref: clapButtonParentRef,
        },
        props.iconComponent
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { textAlign: 'center', margin: '8px 0px 0px 8px' } },
      _react2.default.createElement(
        _core.Typography,
        {
          style: {
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none',
          },
        },
        '+',
        currentClapCount
      )
    )
  );
}
Index.defaultProps = {
  iconComponent: _react2.default.createElement(_HandIcon2.default, { size: 30 }),
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
  iconComponent: _propTypes2.default.func,
  currentClapCount: _propTypes2.default.number,
  userClapCount: _propTypes2.default.number,
  step: _propTypes2.default.number,
  maxClapCount: _propTypes2.default.number,
  clapCircleSize: _propTypes2.default.string,
  countCircleSize: _propTypes2.default.string,
  clapCircleColor: _propTypes2.default.string,
  countCircleColor: _propTypes2.default.string,
  radius: _propTypes2.default.number,
};
