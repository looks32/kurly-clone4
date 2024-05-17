import Link from "next/link";
import React from "react";

export default function AdArea(props) {
  return (
    <div className="ad_area">
      <Link href="#none;">
        <img src={props.adImg} alt="광고 이미지" />
      </Link>
    </div>
    )
}
