import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(/*str, options*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//   let newWord = '';
//   if (options.separator === undefined) {
// options.separator = '+'

//   for(let i = 0; i < options.repeatTimes; i++) {
//     let newWordAdd = '';
      
//       for (let j = 0; j < options.additionRepeatTimes; j++) {
//         if (j < options.additionRepeatTimes - 1) {
//           newWordAdd += options.addition + options.additionSeparator;
//         }
//         else {
//           newWordAdd = newWordAdd + options.addition;
//         }
//       }
    
  

//     if(i < options.repeatTimes - 1) {
//       newWord += str + newWordAdd + options.separator;
//     }
//     else {
//       newWord = newWord + str + newWordAdd;
//     }}

//   } else {
//       // if(options.repeatTimes === undefined) {
//         // options.repeatTimes = 1
//         for(let i = 0; i < options.repeatTimes; i++) {
//           let newWordAdd = '';
            
//             for (let j = 0; j < options.additionRepeatTimes; j++) {
//               if (j < options.additionRepeatTimes - 1) {
//                 newWordAdd += options.addition + options.additionSeparator;
//               }
//               else {
//                 newWordAdd = newWordAdd + options.addition;
//               }
//             }
          
        
      
//           if(i < options.repeatTimes - 1) {
//             newWord += str + newWordAdd + options.separator;
//           }
//           else {
//             newWord = newWord + str + newWordAdd;
//           }}
//        }
        
      
        
//   }
//    return(newWord);
}

// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })