const getRandomInt = () => {
  const min = Math.ceil(0);
  const max = Math.floor(1);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

export const inputArrayMaker = (facialInputs) => {
  let ranMale = getRandomInt();
  let inputArr = {
    0: 0,
    1: getRandomInt(),
    2: getRandomInt(),
    3: 0,
    4: 0,
    5: 0,
    6: getRandomInt(),
    7: getRandomInt(),
    8: facialInputs["hairColor"] === "Black" ? 1 : 0,
    9: facialInputs["hairColor"] === "Blonde" ? 1 : 0,
    10: 0,
    11: facialInputs["hairColor"] === "Brown" ? 1 : 0,
    12: getRandomInt(),
    13: getRandomInt(),
    14: 0, // same value as of ind 13
    15:
      facialInputs["eyeGlasses"] === "EyeGlasses"
        ? 1
        : facialInputs["eyeGlasses"] === ""
        ? getRandomInt()
        : 0,
    16: 0, // handle
    17: facialInputs["hairColor"] === "Gray" ? 1 : 0,
    18: facialInputs["gender"] === "Male" || ranMale ? 0 : getRandomInt(),
    19: getRandomInt(),
    20:
      facialInputs["gender"] === "Male"
        ? 1
        : facialInputs["gender"] === "Female"
        ? 0
        : ranMale,
    21: getRandomInt(),
    22: 0, // handle
    23: getRandomInt(),
    24:
      facialInputs["gender"] === "Female" ||
      facialInputs["facialHair"] === "No-Beard" ||
      !ranMale
        ? 1
        : getRandomInt(),
    25: getRandomInt(),
    26: 0, // depends on ind 50 & 54
    27: getRandomInt(),
    28: 0,
    29: facialInputs["gender"] === "Male" || ranMale ? 0 : getRandomInt(),
    30: getRandomInt(),
    31: getRandomInt(),
    32: getRandomInt(),
    33: 0, // ind 32 & 33 are opposite to each other
    34: 0,
    35: 0,
    36: facialInputs["gender"] === "Male" || ranMale ? 0 : getRandomInt(),
    37: 0,
    38: 0,
    39: 0, // depends on age
    40: facialInputs["age"] === "0-2yrs" ? 1 : 0,
    41: facialInputs["age"] === "4-6yrs" ? 1 : 0,
    42: facialInputs["age"] === "8-12yrs" ? 1 : 0,
    43:
      facialInputs["age"] === "15-20yrs" || facialInputs["age"] === "" ? 1 : 0,
    44: facialInputs["age"] === "25-32yrs" ? 1 : 0,
    45: facialInputs["age"] === "38-43yrs" ? 1 : 0,
    46: facialInputs["age"] === "48-53yrs" ? 1 : 0,
    47: facialInputs["age"] === "60-100yrs" ? 1 : 0,
    48: ranMale || facialInputs["gender"] === "Male" ? 0 : 1,
    49: ranMale || facialInputs["gender"] === "Male" ? 1 : 0,
    50: facialInputs["race"] === "Asian" ? 1 : 0,
    51: facialInputs["race"] === "Black" ? 1 : 0,
    52: facialInputs["race"] === "Hispanic" ? 1 : 0,
    53: facialInputs["race"] === "Indian" ? 1 : 0,
    54: facialInputs["race"] === "White" ? 1 : 0,
  };

  inputArr[14] = inputArr[13];
  inputArr[33] = Number(!inputArr[32]);
  if (inputArr[24] === 1) {
    inputArr[16] = 0;
    inputArr[22] = 0;
  } else {
    inputArr[16] = 1;
    inputArr[22] = 1;
  }

  if (
    inputArr[40] === 1 ||
    inputArr[41] === 1 ||
    inputArr[42] === 1 ||
    inputArr[43] === 1
  ) {
    inputArr[39] = 1;
  } else {
    inputArr[39] = 0;
  }

  if (inputArr[50] === 1 || inputArr[54] === 1) {
    inputArr[26] = getRandomInt();
  } else {
    inputArr[26] = 0;
  }

  // if no hair color
  if (facialInputs["hairColor"] == "") {
    let arr = [8, 9, 11, 17];
    let ranNum = parseInt(Math.random() * 10) % 4;
    inputArr[arr[ranNum]] = 1;
  }

  // If no race
  if (facialInputs["race"] == "") {
    let arr = [50, 51, 52, 53, 54];
    let ranNum = parseInt(Math.random() * 10) % 5;
    inputArr[arr[ranNum]] = 1;
  }

  return Object.values(inputArr);
};
