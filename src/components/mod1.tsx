import { useSuspenseData, withSuspense } from '@ice/runtime';
import { makeFnRunOnce } from '@ali/pegasus-utils';
const test = makeFnRunOnce(async (setData) => {
  const d = await Promise.resolve({ a: 1 });
  setData(d);
});

export default withSuspense(({ setData }) => {
  const data = useSuspenseData(async () => {
    const d = test(setData);
    return d;
  });

  return <div>{data?.a}</div>;
});
