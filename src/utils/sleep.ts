const sleep = (ms: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

export default sleep;
