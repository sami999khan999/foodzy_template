import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export const useParamFilter = (key: string) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialValue = useMemo(() => {
    return decodeURIComponent(searchParams.get(key) || "");
  }, [searchParams, key]);

  const [param, setparam] = useState(initialValue);

  useEffect(() => {
    setparam(initialValue);
  }, [initialValue]);

  const updateparam = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (param === value) {
      params.delete(key);
      router.push(`/shop?${params.toString()}`, { scroll: false });
      return;
    }

    const encodedValue = encodeURIComponent(value);
    setparam(value);
    params.set(key, encodedValue);
    router.push(`/shop?${params.toString()}`, { scroll: false });
  };

  return { param, updateparam };
};
