import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';


export default function App() {
  const [dataArray, setDataArray] = useState(Array.from({ length: 20 }));
  const [hasMore,setHasMore] = useState(true);
  const fetchMoreData = () => {
    setTimeout(() => {
      setDataArray(dataArray.concat(Array.from({ length: 30 })));
    }, 500);
  }

  return (
    <>
      <div className="container m-5">
        <InfiniteScroll
          dataLength={dataArray.length}
          next={fetchMoreData}
          hasMore = {hasMore} 
        >

          {
            dataArray.map((item, index) => (
              <div className="border border-primary mb-3" key={index}>
                <h6>This is a div {index}</h6> <br />
              </div>
            ))
          }

        </InfiniteScroll>
      </div>
    </>
  )
}
