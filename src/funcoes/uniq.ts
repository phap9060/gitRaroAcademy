/**
 * Retorna um array com todos os elementos únicos.
 * 
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */
 export const uniq = (args: number[]) => {
  let uniqueChars:number[]= [];
  args.forEach((c) => {
      if (!uniqueChars.includes(c)) {
      uniqueChars.push(c);
      }
  });
  return uniqueChars

};
