import React from "react";
import VirtualList from "./components/virtualList";

class VirtualListCom extends React.Component {
  render() {
    let data = Array.from({ length: 100 });
    return (
      <div>
        <span>
          demo:
          react-tiny-virtual-list;随着滚动不断往dom增加数据的同时，将不在可视区的数据移除。
        </span>
        <hr />
        <VirtualList
          width="100%"
          height={400}
          itemCount={data.length}
          itemSize={50} // Also supports variable heights (array or function getter)
          renderItem={({ index, style }) => (
            <div key={index} style={style}>
              Letter: {data[index]}, Row: #{index}
            </div>
          )}
        />
      </div>
    );
  }
}

export default VirtualListCom;
