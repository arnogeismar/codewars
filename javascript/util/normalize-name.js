const codeWarsDescription = "Jaden Casing Strings";

let normalizeName = (name) => {
    return name.toString().replace(/ /g, "_").trim().toLowerCase()+".js";
}

console.log(normalizeName(codeWarsDescription));