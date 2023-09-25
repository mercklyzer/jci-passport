const MAX_CODE_LENGTH = 52;
const MAX_ID_LENGTH = 5;

const formatCode = (str) => {
  const unpaddedOutput = "<<" + str.replace(/ /g, "<<");
  const paddings = "<".repeat(MAX_CODE_LENGTH - unpaddedOutput.length);
  const output = unpaddedOutput + paddings;
  console.log(output.length);
  return output;
};

const formatId = (id) => {
  const paddedId = "0".repeat(MAX_ID_LENGTH - id.toString().length) + id;
  return paddedId;
};

const sampleName = "Jose Antonio Ong Veloso Kintanar";
const sampleId = 1;

const codeName = document.querySelector("#code-name");
codeName.textContent = formatCode(sampleName);

const codeId = document.querySelector("#code-id");
codeId.textContent = formatCode(formatId(sampleId));
