import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let membersTrimed = [];
  let membersNew = '';

  if (members != null) {
    for(let j = 0; j < members.length; j++){
      if(typeof members[j] == 'string') {
        membersNew = members[j].trimStart();
        membersTrimed.push(membersNew.toUpperCase());
      }
   }
   
   membersTrimed.sort();
   let dreamteam = '';
   
   for(let i = 0; i < members.length; i++) {
     if (typeof membersTrimed[i] == 'string') {
       dreamteam += membersTrimed[i].charAt(0).toUpperCase(); 
     }
     
   }
   return dreamteam;

  }
  else return false;

}
// createDreamTeam([
//   ['David Abram'],
//   ['Robin Attfield'],
//   'Thomas Berry',
//   ['Paul R.Ehrlich'],
//   'donna Haraway',
//   ' BrIaN_gOodWiN  ',
//   {
//     0: 'Serenella Iovino'
//   },
//   'Erazim Kohak',
//   '  val_plumwood',
// ])