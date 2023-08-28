"use client";

// /course/show-without/574
// /course/show-with/574

import { useEffect, useState } from "react";

const APIURL = process.env.NEXT_PUBLIC_APP_API_1;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data1, setData1] = useState<any | null>(null);
  const [data2, setData2] = useState<any | null>(null);

  const getData = async (api: 1 | 2) => {
    const api1 = "course/show-without/574";
    const api2 = "course/show-with/574";
    setLoading(true);
    try {
      const response = await fetch(`${APIURL}/${api === 1 ? api1 : api2}`);
      if (response.status === 200 && api === 1) {
        const responseData = await response.json();
        setData1(responseData);
      }
      if (response.status === 200 && api === 2) {
        const responseData = await response.json();
        setData2(responseData);
      }
    } catch (error: any) {
      console.log("error", error.response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(1);
    getData(2);
  }, []);

  console.log("data show-without", data1);
  console.log("data show-with", data2);

  return <div>{loading && "loading ..."}</div>;
}
