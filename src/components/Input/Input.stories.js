import Rect from "react";
import "./Input";

export default {
  title: "Input",
  component: Input,
};
export const small = () => <input size="small" placeholder=" small size" />;
export const medium = () => <input size="medium" placeholder=" medium size" />;
export const large = () => <input size="large" placeholder="large size" />;
