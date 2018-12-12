/**
 * Fade Component
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Animated } from 'react-native';

type Props = {
  onFadeComplete: Function,
  duration?: number,
  style: number | string | Object | Array,
  children: Array | Object,
};

class Fade extends Component<Props> {
  static defaultProps = {
    duration: 500,
  };

  constructor() {
    super();

    this.state = {
      viewOpacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const { viewOpacity } = this.state;
    const { onFadeComplete, duration } = this.props;

    Animated.timing(viewOpacity, {
      toValue: 1,
      duration,
    }).start(onFadeComplete || (() => {}));
  }

  render() {
    const { viewOpacity } = this.state;
    const { style } = this.props;

    return (
      <Animated.View style={[{ opacity: viewOpacity }].concat(style || [])}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default Fade;
