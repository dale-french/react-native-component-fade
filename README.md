# react-native-component-fade [![npm version](https://badge.fury.io/js/react-native-component-fade.svg)](https://badge.fury.io/js/react-native-component-fade)

> A simple and lightweight React Native component that fades in it's child components

## Installation

`yarn add react-native-component-fade` or `npm install react-native-component-fade --save`

## Usage

```javascript
import { Fade } from "react-native-component-fade";

const myFadeInComponent = () => (
  <FadeInView
    duration={750}
    style={{ alignItems: "center" }}
    onFadeComplete={() => alert("Fade animation complete")}
  >
    <Text>This text and component will fade in on mount</Text>
    <MyCustomComponent />
  </FadeInView>
);
```

## Properties

| Name           | Description                     |     Type |
| :------------- | :------------------------------ | -------: |
| onFadeComplete | Called when animation completes | Function |
| duration       | Duration of the animation       |   Number |
| style          | Additional styles               |   Object |
