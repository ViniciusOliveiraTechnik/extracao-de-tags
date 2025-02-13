function Container({ children, itemsCenter, justifyCenter, flex, shadow }) {
  return (
    <div
      className={`bg-white p-4
      ${flex ? "flex flex-col gap-3" : ""} 
      ${itemsCenter ? "items-center" : ""} 
      ${justifyCenter ? "justify-center" : ""} 
      ${shadow ? "shadow-lg" : ""} rounded-[8px]`}
    >
      {children}
    </div>
  );
}

export default Container;
