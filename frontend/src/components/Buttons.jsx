export default function Buttons({
  as: Component = "button",
  className = "",
  children,
  ...props
}) {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}