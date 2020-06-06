import React from "react";

const readFile = (file: File): Promise<HTMLImageElement> => {
  const temporaryFileReader = new FileReader();

  return new Promise((resolve, reject) => {
    temporaryFileReader.onerror = () => {
      temporaryFileReader.abort();
      reject(new DOMException("Problem parsing input file."));
    };

    temporaryFileReader.onload = () => {
      const img = new Image();

      img.onload = () => {
        resolve(img);
      };
      if (typeof temporaryFileReader.result === "string")
        img.src = temporaryFileReader.result;
    };
    temporaryFileReader.readAsDataURL(file);
  });
};

const fileValidation = async (
  files: FileList,
  fileLabelRef: React.MutableRefObject<HTMLLabelElement | null>
) => {
  const file = files[0];
  if (!file) return "Please select a file.";
  if (fileLabelRef.current) {
    fileLabelRef.current.classList.remove("is-invalid");
    fileLabelRef.current.classList.add("active");
    fileLabelRef.current.innerText = file.name;
  }
  const image = await readFile(file);
  const type = /\/jpe?g$/i.test(file.type);
  if (type && image.width > 70 && image.height > 70 && file.size < 5242880)
    return true;
  if (fileLabelRef.current) {
    fileLabelRef.current.classList.add("is-invalid");
    fileLabelRef.current.classList.add("active");
    fileLabelRef.current.innerText = file.name;
  }
  return "Please upload correct file (less then 5mb, jpg/jpeg, min 70x70)";
};

export default fileValidation;
