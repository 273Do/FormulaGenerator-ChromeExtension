// import { Counter } from "../app/features/counter";

// const Content = () => {
//   return (
//     <div className="fixed z-[999] bottom-2 right-2 shadow-xl border-[1px] bg-white bg-opacity-10">
//       <div className="flex justify-center mt-2 text-base">Content Counter</div>
//       <Counter />
//     </div>
//   );
// };

// export default Content;

import { DialogBox, DialogBoxProps } from "./DialogBox";

const Content = (props: DialogBoxProps) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        left: "0px",
        top: "0px",
        zIndex: 2147483550,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "10px", // 自由に変えて良い
          top: "10px", // 自由に変えて良い
          zIndex: 2147483550,
        }}
      >
        <DialogBox {...props} />
      </div>
    </div>
  );
};

export default Content;
