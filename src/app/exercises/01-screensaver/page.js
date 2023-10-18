import React from 'react';
import Link from "next/link";

function ScreenSaverExercise() {
  return (
    <main className="screen-saver-wrapper">
      <ul>
        <li>
          <Link href="01-screensaver/lavender">lavender</Link>
        </li>
        <li>
          <Link href="01-screensaver/slateblue">slateblue</Link>
        </li>
        <li>
          <Link href="01-screensaver/hotpink">hotpink</Link>
        </li>
        <li>
          <Link href="01-screensaver/white">white</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
