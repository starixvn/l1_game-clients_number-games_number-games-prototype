import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="dashboard">
      <Link className="menu-lobby game-name" href={"/page/nextBall"}>
        Next Ball
      </Link>
      <Link className="menu-lobby game-name" href={"/page/numberWar"}>
        Number War
      </Link>
      <Link className="menu-lobby game-name" href={"/page/happyFour"}>
        Happy Four
      </Link>
      <Link className="menu-lobby game-name" href={"/page/luckyThree"}>
        Lucky Three
      </Link>
      <Link className="menu-lobby game-name" href={"/page/sicBalls"}>
        Sic Balls
      </Link>
      <Link className="menu-lobby game-name" href={"/page/happyWheel"}>
        Happy Wheel
      </Link>
    </main>
  );
}
