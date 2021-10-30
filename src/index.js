import React, { useContext, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDeepCompareEffect } from 'react-use';
import './index.css';
import isDeepEqual from 'fast-deep-equal/react'

const myContext = React.createContext({
  foo: {
    apple: 120
  },
  bar: {
    lemon: 40,
    melon: 300
  }
});
const setterContext = React.createContext();

const Container = React.memo(() => {
  console.log("render Container")
  const [cxt, setCtx] = useState({
    foo: {
      apple: 200
    },
    bar: {
      grape: 402,
      melon: 300
    }
  })
  const cxtRef = useRef(cxt);
  if (!isDeepEqual(cxtRef.current, cxt)) {
    cxtRef.current = cxt;
  }

  return (
    <myContext.Provider
      value={
        cxtRef.current
      }
    >
      <setterContext.Provider value={setCtx}>

        <Box></Box>
        <hr></hr>
        <EffectBox></EffectBox>
        <hr></hr>
        <SetterBox></SetterBox>
      </setterContext.Provider>
    </myContext.Provider>
  )
})

const Box = React.memo(() => {
  console.log("render Box")
  const mc = useContext(myContext);
  return (
    <>
      <p>{Object.entries(mc.foo).join(":")}</p>
      <p>{Object.entries(mc.bar).join(":")}</p>
    </>
  )

})

const EffectBox = React.memo(() => {
  console.log("render EffectBox")
  const mc = useContext(myContext);
  useDeepCompareEffect(() => {
    console.log("run useDeepCompareEffect");
    console.log(mc);
  }, [mc]);
  return (
    <p>EffectBox</p>
  )
})
const SetterBox = React.memo(() => {
  console.log("render SetterBox")
  const sc = useContext(setterContext);
  onclick = () => {
    sc({
      foo: {
        apple: 999,
        apple02: 999,
        apple03: 999
      },
      bar: {
        grape: 888,
        melon: 777
      }
    });
  }
  return (
    <button onClick={onclick}>SetterBoxButton</button>
  )
})


ReactDOM.render(<Container />, document.getElementById('root'));