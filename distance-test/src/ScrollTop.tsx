import { MouseEventHandler, MouseEvent, useRef } from 'react';

function ScrollTop() {
  const ref = useRef<HTMLDivElement>(null);

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
    if (e) {
      console.log();
    }
    console.log(ref.current?.scrollTop);
    if (ref.current?.scrollTop !== 0) {
      ref.current!.scrollTop = 0;
    }
  };

  return (
    <div>
      <div
        id="box"
        ref={ref}
        style={{
          marginTop: '800px',
          width: '100px',
          height: '100px',
          background: 'ping',
          overflow: 'auto',
          border: '1px solid #000',
        }}
        onClick={clickHandler}
      >
        {new Array(10).fill(1).map((item, index) => {
          return <p key={item + index}>{index}</p>;
        })}
      </div>
    </div>
  );
}

export default ScrollTop;
