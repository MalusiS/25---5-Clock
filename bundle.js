"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var accurateInterval = function accurateInterval(fn, time) {
  var cancel, nextAt, timeout, _wrapper;
  nextAt = new Date().getTime() + time;
  timeout = null;
  _wrapper = function wrapper() {
    nextAt += time;
    timeout = setTimeout(_wrapper, nextAt - new Date().getTime());
    return fn();
  };
  cancel = function cancel() {
    return clearTimeout(timeout);
  };
  timeout = setTimeout(_wrapper, nextAt - new Date().getTime());
  return {
    cancel: cancel
  };
};
var TimerLengthControl = /*#__PURE__*/function (_React$Component) {
  _inherits(TimerLengthControl, _React$Component);
  var _super = _createSuper(TimerLengthControl);
  function TimerLengthControl() {
    _classCallCheck(this, TimerLengthControl);
    return _super.apply(this, arguments);
  }
  _createClass(TimerLengthControl, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "length-control"
      }, /*#__PURE__*/React.createElement("div", {
        id: this.props.titleID
      }, this.props.title), /*#__PURE__*/React.createElement("button", {
        className: "btn-level",
        id: this.props.minID,
        onClick: this.props.onClick,
        value: "-"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-arrow-down fa-2x"
      })), /*#__PURE__*/React.createElement("div", {
        className: "btn-level",
        id: this.props.lengthID
      }, this.props.length), /*#__PURE__*/React.createElement("button", {
        className: "btn-level",
        id: this.props.addID,
        onClick: this.props.onClick,
        value: "+"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-arrow-up fa-2x"
      })));
    }
  }]);
  return TimerLengthControl;
}(React.Component);
var Timer = /*#__PURE__*/function (_React$Component2) {
  _inherits(Timer, _React$Component2);
  var _super2 = _createSuper(Timer);
  function Timer(props) {
    var _this;
    _classCallCheck(this, Timer);
    _this = _super2.call(this, props);
    _this.state = {
      brkLength: 5,
      seshLength: 25,
      timerState: 'stopped',
      timerType: 'Session',
      timer: 1500,
      intervalID: '',
      alarmColor: {
        color: 'white'
      }
    };
    _this.setBrkLength = _this.setBrkLength.bind(_assertThisInitialized(_this));
    _this.setSeshLength = _this.setSeshLength.bind(_assertThisInitialized(_this));
    _this.lengthControl = _this.lengthControl.bind(_assertThisInitialized(_this));
    _this.timerControl = _this.timerControl.bind(_assertThisInitialized(_this));
    _this.beginCountDown = _this.beginCountDown.bind(_assertThisInitialized(_this));
    _this.decrementTimer = _this.decrementTimer.bind(_assertThisInitialized(_this));
    _this.phaseControl = _this.phaseControl.bind(_assertThisInitialized(_this));
    _this.warning = _this.warning.bind(_assertThisInitialized(_this));
    _this.buzzer = _this.buzzer.bind(_assertThisInitialized(_this));
    _this.switchTimer = _this.switchTimer.bind(_assertThisInitialized(_this));
    _this.clockify = _this.clockify.bind(_assertThisInitialized(_this));
    _this.reset = _this.reset.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Timer, [{
    key: "setBrkLength",
    value: function setBrkLength(e) {
      this.lengthControl('brkLength', e.currentTarget.value, this.state.brkLength, 'Session');
    }
  }, {
    key: "setSeshLength",
    value: function setSeshLength(e) {
      this.lengthControl('seshLength', e.currentTarget.value, this.state.seshLength, 'Break');
    }
  }, {
    key: "lengthControl",
    value: function lengthControl(stateToChange, sign, currentLength, timerType) {
      if (this.state.timerState === 'running') {
        return;
      }
      if (this.state.timerType === timerType) {
        if (sign === '-' && currentLength !== 1) {
          this.setState(_defineProperty({}, stateToChange, currentLength - 1));
        } else if (sign === '+' && currentLength !== 60) {
          this.setState(_defineProperty({}, stateToChange, currentLength + 1));
        }
      } else if (sign === '-' && currentLength !== 1) {
        this.setState(_defineProperty(_defineProperty({}, stateToChange, currentLength - 1), "timer", currentLength * 60 - 60));
      } else if (sign === '+' && currentLength !== 60) {
        this.setState(_defineProperty(_defineProperty({}, stateToChange, currentLength + 1), "timer", currentLength * 60 + 60));
      }
    }
  }, {
    key: "timerControl",
    value: function timerControl() {
      if (this.state.timerState === 'stopped') {
        this.beginCountDown();
        this.setState({
          timerState: 'running'
        });
      } else {
        this.setState({
          timerState: 'stopped'
        });
        if (this.state.intervalID) {
          this.state.intervalID.cancel();
        }
      }
    }
  }, {
    key: "beginCountDown",
    value: function beginCountDown() {
      var _this2 = this;
      this.setState({
        intervalID: accurateInterval(function () {
          _this2.decrementTimer();
          _this2.phaseControl();
        }, 1000)
      });
    }
  }, {
    key: "decrementTimer",
    value: function decrementTimer() {
      this.setState({
        timer: this.state.timer - 1
      });
    }
  }, {
    key: "phaseControl",
    value: function phaseControl() {
      var timer = this.state.timer;
      this.warning(timer);
      this.buzzer(timer);
      if (timer < 0) {
        if (this.state.intervalID) {
          this.state.intervalID.cancel();
        }
        if (this.state.timerType === 'Session') {
          this.beginCountDown();
          this.switchTimer(this.state.brkLength * 60, 'Break');
        } else {
          this.beginCountDown();
          this.switchTimer(this.state.seshLength * 60, 'Session');
        }
      }
    }
  }, {
    key: "warning",
    value: function warning(_timer) {
      if (_timer < 61) {
        this.setState({
          alarmColor: {
            color: '#a50d0d'
          }
        });
      } else {
        this.setState({
          alarmColor: {
            color: 'white'
          }
        });
      }
    }
  }, {
    key: "buzzer",
    value: function buzzer(_timer) {
      if (_timer === 0) {
        this.audioBeep.play();
      }
    }
  }, {
    key: "switchTimer",
    value: function switchTimer(num, str) {
      this.setState({
        timer: num,
        timerType: str,
        alarmColor: {
          color: 'white'
        }
      });
    }
  }, {
    key: "clockify",
    value: function clockify() {
      if (this.state.timer < 0) return "00:00";
      var minutes = Math.floor(this.state.timer / 60);
      var seconds = this.state.timer - minutes * 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      return minutes + ':' + seconds;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        brkLength: 5,
        seshLength: 25,
        timerState: 'stopped',
        timerType: 'Session',
        timer: 1500,
        intervalID: '',
        alarmColor: {
          color: 'white'
        }
      });
      if (this.state.intervalID) {
        this.state.intervalID.cancel();
      }
      this.audioBeep.pause();
      this.audioBeep.currentTime = 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "main-title"
      }, "25 + 5 Clock"), /*#__PURE__*/React.createElement(TimerLengthControl, {
        addID: "break-increment",
        length: this.state.brkLength,
        lengthID: "break-length",
        minID: "break-decrement",
        onClick: this.setBrkLength,
        title: "Break Length",
        titleID: "break-label"
      }), /*#__PURE__*/React.createElement(TimerLengthControl, {
        addID: "session-increment",
        length: this.state.seshLength,
        lengthID: "session-length",
        minID: "session-decrement",
        onClick: this.setSeshLength,
        title: "Session Length",
        titleID: "session-label"
      }), /*#__PURE__*/React.createElement("div", {
        className: "timer",
        style: this.state.alarmColor
      }, /*#__PURE__*/React.createElement("div", {
        className: "timer-wrapper"
      }, /*#__PURE__*/React.createElement("div", {
        id: "timer-label"
      }, this.state.timerType), /*#__PURE__*/React.createElement("div", {
        id: "time-left"
      }, this.clockify()))), /*#__PURE__*/React.createElement("div", {
        className: "timer-control"
      }, /*#__PURE__*/React.createElement("button", {
        id: "start_stop",
        onClick: this.timerControl
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-play fa-2x"
      }), /*#__PURE__*/React.createElement("i", {
        className: "fa fa-pause fa-2x"
      })), /*#__PURE__*/React.createElement("button", {
        id: "reset",
        onClick: this.reset
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-refresh fa-2x"
      }))), /*#__PURE__*/React.createElement("audio", {
        id: "beep",
        preload: "auto",
        ref: function ref(audio) {
          _this3.audioBeep = audio;
        },
        src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      }));
    }
  }]);
  return Timer;
}(React.Component);
var root = ReactDOM.createRoot(document.getElementById('app'));
root.render( /*#__PURE__*/React.createElement(Timer, null));