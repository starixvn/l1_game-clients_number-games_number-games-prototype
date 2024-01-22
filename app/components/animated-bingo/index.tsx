import { AnimatedSprite, Container, Stage } from "@pixi/react";
import { Assets, Resource, Spritesheet, Texture } from "pixi.js";
import React, { useEffect } from "react";

import Styles from "./animated-bingo.module.scss";

const AnimatedBingo = () => {
  const [playAnim, setPlayAnim] = React.useState(false);
  console.log(playAnim);
  const [drumLoopFrames, setDrumLoopFrames] = React.useState<Texture<Resource>[]>([]);
  const [drumBallFrames, setDrumBallFrames] = React.useState<Texture<Resource>[]>([]);
  const [drumNumberFrames, setDrumNumberFrames] = React.useState<Texture<Resource>[]>([]);

  useEffect(() => {
    const loadDrumLoopsJson = async () => {
      const sprite = await Assets.load<Spritesheet>(
        "/images/animated-bingo/drum-loop.json"
      );
      setDrumLoopFrames(sprite.animations["loop"]);
    };
    loadDrumLoopsJson();

    const loadDrumBallJson = async () => {
      const sprite = await Assets.load<Spritesheet>(
        "/images/animated-bingo/drum-ball-colors.json"
      );
      setDrumBallFrames(sprite.animations["green"]);
    };
    loadDrumBallJson();

    const loadDrumNumberJson = async () => {
      const sprite = await Assets.load<Spritesheet>(
        "/images/animated-bingo/drum-ball-numbers.json"
      );
      setDrumNumberFrames(sprite.animations["16"]);
    };
    loadDrumNumberJson();
  }, []);

  if (
    drumLoopFrames.length > 0 &&
    drumBallFrames.length > 0 &&
    drumNumberFrames.length > 0
  ) {
    return (
      <div className="relative">
        <div>
          <Stage width={375} height={370} options={{ backgroundAlpha: 0 }}>
            <Container position={[185, 250]}>
              <AnimatedSprite
                anchor={0.5}
                textures={drumLoopFrames}
                autoUpdate
                isPlaying={true}
                initialFrame={0}
                animationSpeed={0.5}
                loop={true}
              />
            </Container>
          </Stage>
        </div>
        <div className={Styles.ball}>
          <Stage width={352} height={350} options={{ backgroundAlpha: 0 }}>
            <Container position={[255, 207]}>
              <AnimatedSprite
                anchor={0.5}
                textures={drumBallFrames}
                autoUpdate
                isPlaying={true}
                initialFrame={0}
                animationSpeed={0.5}
                loop={true}
              />
            </Container>
          </Stage>
        </div>
        <div className={Styles.number}>
          <Stage width={352} height={350} options={{ backgroundAlpha: 0 }}>
            <Container position={[250, 205]}>
              <AnimatedSprite
                anchor={0.5}
                textures={drumNumberFrames}
                autoUpdate
                isPlaying={true}
                initialFrame={0}
                animationSpeed={0.5}
                loop={true}
              />
            </Container>
          </Stage>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default AnimatedBingo;
