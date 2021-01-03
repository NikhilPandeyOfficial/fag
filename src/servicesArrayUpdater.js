export const arrayUpdater = (current, past, arrayCollection) => {
  //   age
  if (current[0] != past[0]) {
    arrayCollection[40] = current[0] === "0-2yrs" ? 1 : 0;
    arrayCollection[41] = current[0] === "4-6yrs" ? 1 : 0;
    arrayCollection[42] = current[0] === "8-12yrs" ? 1 : 0;
    arrayCollection[43] = current[0] === "15-20yrs" ? 1 : 0;
    arrayCollection[44] = current[0] === "25-32yrs" ? 1 : 0;
    arrayCollection[45] = current[0] === "38-43yrs" ? 1 : 0;
    arrayCollection[46] = current[0] === "48-53yrs" ? 1 : 0;
    arrayCollection[47] = current[0] === "60-100yrs" ? 1 : 0;

    if (
      arrayCollection[40] === 1 ||
      arrayCollection[41] === 1 ||
      arrayCollection[42] === 1 ||
      arrayCollection[43] === 1
    ) {
      arrayCollection[39] = 1;
    } else {
      arrayCollection[39] = 0;
    }
  }

  //   gender
  if (current[1] != past[1]) {
    arrayCollection[18] = current[1] === "Male" ? 0 : arrayCollection[18];
    arrayCollection[20] = current[1] === "Male" ? 1 : 0;
    arrayCollection[29] = current[1] === "Male" ? 0 : arrayCollection[29];
    arrayCollection[36] = current[1] === "Male" ? 0 : arrayCollection[36];
    arrayCollection[48] = current[1] === "Male" ? 0 : 1;
    arrayCollection[49] = current[1] === "Male" ? 1 : 0;
  }
  // race
  if (current[2] != past[2]) {
    arrayCollection[50] = current[2] === "Asian" ? 1 : 0;
    arrayCollection[51] = current[2] === "Black" ? 1 : 0;
    arrayCollection[52] = current[2] === "Hispanic" ? 1 : 0;
    arrayCollection[53] = current[2] === "Indian" ? 1 : 0;
    arrayCollection[54] = current[2] === "White" ? 1 : 0;

    if (arrayCollection[50] === 1 || arrayCollection[54] === 1) {
      arrayCollection[26] = arrayCollection[26];
    } else {
      arrayCollection[26] = 0;
    }
  }
  // hair color
  if (current[3] != past[3]) {
    arrayCollection[8] = current[3] === "Black" ? 1 : 0;
    arrayCollection[9] = current[3] === "Blonde" ? 1 : 0;
    arrayCollection[11] = current[3] === "Brown" ? 1 : 0;
    arrayCollection[17] = current[3] === "Gray" ? 1 : 0;
  }
  //   beard
  if (current[4] != past[4]) {
    arrayCollection[24] =
      current[1] === "Female" || current[5] === "No-Beard"
        ? 1
        : arrayCollection[24];

    if (arrayCollection[24] === 1) {
      arrayCollection[16] = 0;
      arrayCollection[22] = 0;
    } else {
      arrayCollection[16] = 1;
      arrayCollection[22] = 1;
    }
  }
  //   eye glasses
  if (current[5] != past[5]) {
    arrayCollection[15] = current[5] === "EyeGlasses" ? 1 : 0;
  }
  return arrayCollection;
};
