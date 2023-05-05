const Maps =()=>{
// let student =['john', 'mary', 'mitchel'];
// return(
// <div>
//     {student.map((student)=>(
//         <h1>{student}</h1>
//     ))}
// </div>
// )
// mapOject
// let students =['john', 'mary', 'mitchel'];
// let studentList= students.map((student)=>(
//     <h1 key={student}>{student}</h1>))
// return(
// <div>{studentList}</div>
// )


let students=[
    
    {id:'1', name: 'morgan', course: 'full-stack'},    
    {Id:'1', name: 'mitchel', course: 'cyber security'},
    {Id:'1' ,name: 'mary', course: 'python'},
    {Id:'1', name: 'doe', course: 'ethical hack'}
];
let studentList= students.map((student)=>(
        <h1 key={student.id}>{student.name},{student.course}</h1>))
    return(
    <div>{studentList}</div>
    )
}


export default Maps;
