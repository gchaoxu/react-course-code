import { useEffect, useRef } from 'react';

function OffsetTop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('offsetTop', ref.current?.offsetTop);
    console.log('clientTop', ref.current?.clientTop);
    console.log(
      ref.current?.offsetParent,
      ref.current?.offsetParent?.className
    );
  }, []);

  return (
    <div>
      <div
        style={{
          position: 'relative',
          margin: '100px',
          padding: '200px',
          border: '1px solid blue',
        }}
      >
        <div
          className="container"
          style={{
            position: 'relative',
            margin: '100px',
            padding: '100px',
            border: '1px solid blue',
          }}
        >
          <div
            id="box"
            ref={ref}
            style={{
              border: '20px solid #000',
              width: '100px',
              height: '100px',
              background: 'pink',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default OffsetTop;
