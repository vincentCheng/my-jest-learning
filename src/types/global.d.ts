declare namespace globalThis {
  var jsdom: unknown;
}
declare module "*.less" {
  const content: unknown;
  export default content;
}

declare module "*.module.scss";
declare module "*.module.sass";
declare module "*.module.css";
