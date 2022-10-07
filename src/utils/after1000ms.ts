type AnyFunction = (...args: any[]) => any;

const after1000ms = (callback?: AnyFunction) => {
  console.log("准备计算时间");
  setTimeout(() => {
    console.log("时间到了");
    callback && callback();
  }, 1000);
};

export default after1000ms;
