// declare var console: object;

// declare var console: {
  // log(message?: any): void
// }


// declare namespace console {
//   function log(message?: any) :void
//   function error(message?: any) :void
// }

// console.error

interface Console {
  log(message?: any) :void
  error(message?: any) :void
}

declare var console: Console


type timeHandle = () => void
declare function setTimeout(handle:timeHandle, timeout: number):number;
declare function setInterval(handle:timeHandle, timeout: number):number;