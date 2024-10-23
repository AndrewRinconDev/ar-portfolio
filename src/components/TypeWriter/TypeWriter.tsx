import Typewriter from "typewriter-effect";

function TypewriterCustom({ strings }: { strings: string[] }) {
  if (!strings) return null;

  return (
    <Typewriter
      options={{
        strings: strings,
        delay: 75,
        deleteSpeed: 40,
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default TypewriterCustom;
