import './snowman.css';

export default function Snowman({ errors, className }: { errors: number; className?: string }) {
  return (
    <div className={`snowman bg-white rounded-lg border-5 ${className && ' ' + className}`}>
      {errors >= 5 && (
        <>
          <div className="Hat_Top"></div>
          <div className="Hat_Middle"></div>
          <div className="Hat_Bottom"></div>
        </>
      )}
      {errors >= 4 && (
        <>
          <div className="Scarf_Center"></div>
          <div className="Scarf_Right"></div>
          <div className="Scarf_Left"></div>
        </>
      )}
      {errors >= 6 && (
        <>
          <div className="Nose"></div>
          <div className="Eye_Right"></div>
          <div className="Eye_Left"></div>
        </>
      )}
      {errors >= 3 && <div className="Ellipse_Top"></div>}
      {errors >= 2 && <div className="Ellipse_Middle"></div>}
      {errors >= 1 && <div className="Ellipse_Bottom"></div>}
    </div>
  );
}
