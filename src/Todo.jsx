import PropTypes from 'prop-types';
// function Todo({task,right}) {
//     console.log({task,right})
//   return (
//     <div>
//       <h1>Todo</h1>
//     </div>
//   )
// }

// function Todo({task,right}) {
//     console.log({task,right})
//     return (
//         <div>
//             {right? 'work on' : 'no work' }: {task}
//         </div>
//     )
// }

function Todo({task,right}) {
    console.log({task,right})
    return (
        <div>
          {task} {right || 'Done'}
        </div>
    )
}


Todo.propTypes = {
    task: PropTypes.string.isRequired,
    right: PropTypes.bool.isRequired,
  };
export default Todo