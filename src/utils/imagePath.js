import historiaImg from "@/assets/images/historia.jpeg";
import missaoImg from "@/assets/images/missao.jpg";
import valoresImg from "@/assets/images/valores.jpg";
import equipeImg from "@/assets/images/equipe.jpg";
import contatoImg from "@/assets/images/contato.png";

const imageMap = {
  "@/assets/images/historia.jpeg": historiaImg,
  "@/assets/images/missao.jpg": missaoImg,
  "@/assets/images/valores.jpg": valoresImg,
  "@/assets/images/equipe.jpg": equipeImg,
  "@/assets/images/contato.png": contatoImg,
  "src/assets/images/historia.jpeg": historiaImg,
  "src/assets/images/missao.jpg": missaoImg,
  "src/assets/images/valores.jpg": valoresImg,
  "src/assets/images/equipe.jpg": equipeImg,
  "src/assets/images/contato.png": contatoImg,
};

export function getImagePath(path) {
  if (!path) return "";

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (imageMap[path]) {
    return imageMap[path];
  }

  let normalizedPath = path;
  if (path.startsWith("@/")) {
    normalizedPath = path;
  } else if (path.startsWith("src/")) {
    normalizedPath = path.replace("src/", "@/");
  } else if (!path.startsWith("@/")) {
    normalizedPath = `@/${path}`;
  }

  if (imageMap[normalizedPath]) {
    return imageMap[normalizedPath];
  }

  console.warn("Imagem não encontrada no mapeamento:", path);
  return path;
}
