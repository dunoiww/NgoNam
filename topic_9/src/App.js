import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Content from './Content';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  //handleResize sẽ không tạo ra phiên bản mới mỗi lần useEffct resize bị chạy lại
  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  //handleResize không tạo lại phiên bản mới thế nên remove sẽ chạy khi nào component unmount hoặc re-render toàn bộ
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      console.log('resize remove');
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  //check handleResize có thay đổi không
  useEffect(() => {
    console.log('resize effect');
  }, [handleResize])

  const widthRef = useRef(windowSize.width);

  useEffect(() => {
    widthRef.current = windowSize.width;
  }, [windowSize.width]);

  const isLargeScreen = useMemo(() => widthRef.current >= 1024, [widthRef.current]); //Chỉ tính toán lại khi widthRef.current thay đổi
  const isMediumScreen = useMemo(() => widthRef.current >= 768 && widthRef.current < 1024, [widthRef.current]);
  const isSmallScreen = useMemo(() => widthRef.current < 768, [widthRef.current]);

  return { windowSize, isLargeScreen, isMediumScreen, isSmallScreen };
}

function App() {
  const { windowSize, isLargeScreen, isMediumScreen, isSmallScreen } = useWindowSize();

  // const [count, setCount] = useState(0);

  // const handleClick = useCallback(() => {
  //   setCount(prev => prev + 1);
  // }, [])

  return (
    <div>
      {/* <Content handleClick={handleClick}/> */}
      {/* <h1>{count}</h1> */}
      <h1>Window Size:</h1>
      <p>Width: {windowSize.width}</p>
      <p>Height: {windowSize.height}</p>
      <h2>Screen Size:</h2>
      <p>Large Screen: {isLargeScreen.toString()}</p>
      <p>Medium Screen: {isMediumScreen.toString()}</p>
      <p>Small Screen: {isSmallScreen.toString()}</p>
    </div>
  );
}

export default App;
