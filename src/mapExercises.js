import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentNames
// It should not accept any parameters`
// It should return an array of strings. Each string should be the full name of the student

export const getStudentNames = () => {
  return students.map(kid => `${kid.firstName} ${kid.lastName}`)
}

// Export a function named StudentList
// It should not accept any parameters
// It should return a single HTMLString that contains a <div> element for every student that looks like the following:
// Ex:
/*
  <div>
    <h1>Summer Smith</h1>
    <h2>Cohort 43</h2>
  </div>
*/

export const StudentList = () => {
  const string = students.map(kid => {
    return `<div>
    <h1>${kid.firstName} ${kid.lastName}</h1>
    <h2>Cohort ${kid.cohort}</h2>
    </div>` 
  })
  return string.join(" ")
}