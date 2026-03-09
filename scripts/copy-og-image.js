import { promises as fs } from "fs";
import { join } from "path";

async function copy() {
  const src = join(process.cwd(), "src/assets/logo-fundo-branco.jpeg");
  const destDir = join(process.cwd(), "public");
  const dest = join(destDir, "og-image.jpg");

  try {
    await fs.mkdir(destDir, { recursive: true });
    await fs.copyFile(src, dest);
    console.log(`Copied ${src} -> ${dest}`);
  } catch (err) {
    console.error("Failed to copy OG image:", err);
    process.exit(1);
  }
}

copy();
