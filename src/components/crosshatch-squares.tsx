interface CrosshatchSquareProps {
  size: number;
  top: string;
  left: string;
  opacity?: number;
  rotation?: number;
}

const SQUARES: CrosshatchSquareProps[] = [
  { size: 40, top: "12%", left: "3%", opacity: 0.18, rotation: 0 },
  { size: 28, top: "8%", left: "92%", opacity: 0.12, rotation: 15 },
  { size: 52, top: "28%", left: "96%", opacity: 0.1, rotation: -8 },
  { size: 32, top: "38%", left: "1.5%", opacity: 0.14, rotation: 5 },
  { size: 24, top: "52%", left: "94%", opacity: 0.16, rotation: -12 },
  { size: 44, top: "62%", left: "2.5%", opacity: 0.11, rotation: 10 },
  { size: 20, top: "72%", left: "91%", opacity: 0.15, rotation: -5 },
  { size: 36, top: "85%", left: "4%", opacity: 0.13, rotation: 18 },
  { size: 30, top: "78%", left: "95%", opacity: 0.1, rotation: -15 },
  { size: 26, top: "45%", left: "5%", opacity: 0.12, rotation: 8 },
  { size: 34, top: "18%", left: "1%", opacity: 0.1, rotation: -10 },
  { size: 22, top: "92%", left: "93%", opacity: 0.14, rotation: 3 },
];

const CROSSHATCH_PATTERN = `
  repeating-linear-gradient(
    45deg,
    currentColor,
    currentColor 1px,
    transparent 1px,
    transparent 5px
  ),
  repeating-linear-gradient(
    -45deg,
    currentColor,
    currentColor 1px,
    transparent 1px,
    transparent 5px
  )
`;

const CrosshatchSquares = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {SQUARES.map((square, index) => (
        <div
          key={index}
          className="absolute text-[#b4b4ba]"
          style={{
            width: square.size,
            height: square.size,
            top: square.top,
            left: square.left,
            opacity: square.opacity,
            transform: `rotate(${square.rotation ?? 0}deg)`,
            background: CROSSHATCH_PATTERN,
          }}
        />
      ))}
    </div>
  );
};

export default CrosshatchSquares;
