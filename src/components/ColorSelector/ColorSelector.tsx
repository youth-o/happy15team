import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import styles from "./ColorSelector.module.css";

interface ColorSelectorProps {
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
}

export default function ColorSelector({
  selectedColor,
  setSelectedColor,
}: ColorSelectorProps) {
  const colors = [
    "#7ac555", // Green
    "#5534da", // Violet-20
    "#ffa500", // Orange
    "#76a5ea", // Blue
    "#e876ea", // Pink
  ];

  return (
    <div className={styles.ColorSelectorbody}>
      {colors.map((color) => (
        <button
          className={styles.ColorSelector}
          key={color}
          onClick={() => setSelectedColor(color)}
          type="button"
          style={{
            backgroundColor: color,
          }}
        >
          {selectedColor === color && (
            <Image
              width={24}
              height={24}
              src="/images/check.svg"
              alt="체크 아이콘"
            />
          )}
        </button>
      ))}
    </div>
  );
}
