import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import styles from "./ColorSelector.module.css";

interface ColorSelectorProps {
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  customStyle: string;
}

export default function ColorSelector({
  selectedColor,
  setSelectedColor,
  customStyle,
}: ColorSelectorProps) {
  const colors = [
    "var(--Green)",
    "var(--Violet-20)",
    "var(--Orange)",
    "var(--Blue)",
    "var(--Pink)",
  ];

  return (
    <div className={styles.ColorSelectorbody}>
      {colors.map((color) => (
        <button
          className={styles.ColorSelector}
          key={color}
          onClick={() => setSelectedColor(color)}
          type="button"
        >
          {selectedColor === color && (
            <Image
              width={24}
              height={24}
              src="/public/images/check.svg"
              alt="체크 아이콘"
            />
          )}
        </button>
      ))}
    </div>
  );
}
