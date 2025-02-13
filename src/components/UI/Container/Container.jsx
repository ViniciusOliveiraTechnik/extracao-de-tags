function Container({
  children,
  itemsCenter,
  justifyCenter,
  flex,
  shadow,
  bgColor,
}) {
  return (
    <div
      className={`p-4
      ${flex ? "flex flex-col gap-3" : ""} 
      ${itemsCenter ? "items-center" : ""} 
      ${justifyCenter ? "justify-center" : ""} `}
    >
      {children}
    </div>
  );
}

export default Container;
