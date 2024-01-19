import { AnimatedSprite, Container, Stage } from "@pixi/react";
import { Assets, Resource, Spritesheet, Texture } from "pixi.js";
import React, { useEffect } from "react";

const AnimatedBingo = () => {
  const [playAnim, setPlayAnim] = React.useState(false);
  console.log(playAnim);
  const [frames, setFrames] = React.useState<Texture<Resource>[]>([]);

  useEffect(() => {
    const load = async () => {
      const sprite = await Assets.load<Spritesheet>(
        "/images/animated-bingo/animated-bingo.json"
      );
      setFrames(sprite.animations["star"]);
    };
    load();
  }, []);

  if (frames.length > 0) {
    return (
      <div>
        <Stage width={200} height={200} options={{ backgroundAlpha: 0 }}>
          <Container position={[150, 150]}>
            <AnimatedSprite
              anchor={0.5}
              textures={frames}
              autoUpdate
              isPlaying={playAnim}
              initialFrame={0}
              animationSpeed={0.5}
              loop={true}
            />
          </Container>
        </Stage>
        <button className="button text-white" onClick={() => setPlayAnim(!playAnim)}>
          Play
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default AnimatedBingo;
