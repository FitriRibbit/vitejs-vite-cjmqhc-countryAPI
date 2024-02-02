const Results = ({ result, handleShow }) => {
  return (
    <ul>
        {result.name.common} <button onClick = {() => 
          handleShow(result)} >  Show</button>
    </ul>
  );
};

export default Results;
