"use client";
import { CkFinderAuthProvider } from "@/components/ckfinder/ckfinder-auth-provider";
import ClientSideCustomEditor from "@/components/client-side-custom-editor";
import Script from "next/script";

/// To authorize ckfinder pass auth token as second url segment.
export default function Page() {
  return (
    <>
      <ClientSideCustomEditor />

      <Script src="/ckfinder/ckfinder/ckfinder.js"></Script>
      <CkFinderAuthProvider />
    </>
  );
}
