export function multiplicaArgs(...args:Array<number>) {
  return args.reduce((ac, valor)=> ac * valor,1)
}

export function concatena(...args:string[]){
  return args.reduce((ac,valor)=> ac + valor )
}

export function toUpperCase(...args:string[]){
  return args.map((valor)=>valor.toUpperCase)
}


const result = multiplicaArgs(1,2,3)
const conca = concatena('a','b')
const upper = toUpperCase('a','b','c')
